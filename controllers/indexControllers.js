let indexControllers = {
    index: function(req, res, next) {
        res.render('index', { title: 'Heroes' });
      }
}

module.exports = indexControllers;