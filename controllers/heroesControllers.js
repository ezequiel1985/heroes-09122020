// Require de FS para la importacion del heroes,json
const fs = require('fs');

let path = require('path');
let reqPath = path.join(__dirname, '../')
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(reqPath + '/data/heroes.json', 'utf-8'));

let heroesControllers = {
    heroes: (req, res) => {
        res.send(heroes);
    },
    profesion: function(req, res, next) {

        if (req.params.id > heroes.length) {
            res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id');
    
        } else {
     
        let heroe = heroes.find(function (heroe) {
            return heroe.id == req.params.id;
          })
          res.render('heroesDetalle', { title: 'Detalles Heroes', name: heroe.nombre, profesion: heroe.profesion });
        }
      }
}

module.exports = heroesControllers;