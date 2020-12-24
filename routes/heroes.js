// Require de Express
const express = require('express');
var router = express.Router(); // utilizamos router

// Require de FS para la importacion del heroes,json
const fs = require('fs');

let path = require('path');
let reqPath = path.join(__dirname, '../')
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(reqPath + '/data/heroes.json', 'utf-8'));

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', (req, res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/:id', function(req, res, next) {

    if (req.params.id > heroes.length) {
        res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id');

    } else {
 
    let heroe = heroes.find(function (heroe) {
        return heroe.id == req.params.id;
      })
      res.render('heroesDetalle', { title: 'Detalles Heroes', name: heroe.nombre, profesion: heroe.profesion });
    }
  });


module.exports = router;