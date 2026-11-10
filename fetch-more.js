const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, 'images');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'AntigravityApp/1.0 (test@example.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'AntigravityApp/1.0 (test@example.com)' } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function getCategoryImages() {
  const catUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Water_jousting_in_S%C3%A8te&cmtype=file&cmlimit=25&format=json`;
  const res = await fetchJson(catUrl);
  const titles = res.query.categorymembers.map(m => m.title);
  console.log('Found category members:', titles.length);

  const chunkSize = 10;
  const allImages = [];

  for (let i = 0; i < titles.length; i += chunkSize) {
    const chunk = titles.slice(i, i + chunkSize);
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(chunk.join('|'))}&prop=imageinfo&iiprop=url|extmetadata&format=json`;
    const details = await fetchJson(apiUrl);
    const pages = details.query.pages;
    for (const pid in pages) {
      const p = pages[pid];
      if (p.imageinfo && p.imageinfo[0]) {
        allImages.push({
          title: p.title.replace('File:', ''),
          url: p.imageinfo[0].url,
          desc: p.imageinfo[0].extmetadata?.ImageDescription?.value || p.title
        });
      }
    }
  }

  // Filter and download best ones
  const manifest = [];
  let count = 0;

  for (const img of allImages) {
    if (count >= 8) break;
    const safeName = 'sete_' + img.title.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 30) + (img.url.endsWith('.png') ? '.png' : '.jpg');
    const dest = path.join(outDir, safeName);
    console.log(`Downloading ${safeName} from ${img.url}...`);
    try {
      await downloadFile(img.url, dest);
      manifest.push({
        title: img.title,
        file: safeName,
        url: img.url,
        desc: img.desc.replace(/<[^>]*>?/gm, '').trim()
      });
      count++;
    } catch (e) {
      console.log('Error downloading', e.message);
    }
  }

  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Downloaded count:', manifest.length);
}

getCategoryImages().catch(console.error);
