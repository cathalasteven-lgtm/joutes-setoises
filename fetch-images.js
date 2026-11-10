const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, 'images');

const fileList = [
  {
    title: 'Sete_Canal_Royal_Joutes.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Joutes_s%C3%A9toises_03.png/800px-Joutes_s%C3%A9toises_03.png',
    caption: 'Choc de lances lors des joutes de la Saint-Louis au Cadre Royal de Sète'
  },
  {
    title: 'Barques_Joutes_Port_Sete.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/S%C3%A8te_au_matin_avec_des_barques_%C3%A0_joute.jpg/800px-S%C3%A8te_au_matin_avec_des_barques_%C3%A0_joute.jpg',
    caption: 'Les barques traditionnelles (La Rouge et La Bleue) amarrées à Sète au lever du jour'
  },
  {
    title: 'Detail_Barques_Tintaine.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/D%C3%A9tails_de_2_barques_%C3%A0_joute_s%C3%A9toise_dans_le_port_de_S%C3%A8te.jpg/800px-D%C3%A9tails_de_2_barques_%C3%A0_joute_s%C3%A9toise_dans_le_port_de_S%C3%A8te.jpg',
    caption: 'Détails de la tintaine et de la bigue sur les barques de joutes sétoises'
  },
  {
    title: 'Preparation_Lances_Saint_Louis.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Stlouis2005_8.jpg/800px-Stlouis2005_8.jpg',
    caption: 'Chargement et vérification des lances de 2,80 m pour la Saint-Louis'
  },
  {
    title: 'Cadre_Royal_Sete_Nuit.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sete_France.jpg/800px-Sete_France.jpg',
    caption: 'Le Cadre Royal de Sète illuminé de nuit, théâtre mythique des tournois'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, {
      headers: {
        'User-Agent': 'SeteJoutesEducationalApp/1.0 (https://github.com/example/setejoutes; setejoutes@example.com)'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP status ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    req.on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  const downloaded = [];
  for (const item of fileList) {
    const dest = path.join(outDir, item.title);
    console.log(`Downloading ${item.title}...`);
    try {
      await download(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`Success ${item.title} (${stat.size} bytes)`);
      downloaded.push({
        title: item.title,
        caption: item.caption,
        size: stat.size,
        localPath: `images/${item.title}`,
        source: item.url
      });
    } catch (e) {
      console.error(`Error on ${item.title}: ${e.message}`);
    }
  }
  fs.writeFileSync(path.join(outDir, 'photos-ready.json'), JSON.stringify(downloaded, null, 2));
  console.log('All done!');
}

run();
