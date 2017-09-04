module.exports = {

  handleCreate(req, res) {
    res.render('names/generate-index', {
      data: res.locals.gen,
    });
  },
   show406(err, req, res, next) {
    res.sendStatus(406);
  },
    show404(err, req, res, next) {
    res.sendStatus(404);
  },
  showNames(req, res) {
    res.render('names/name-index', {
      data: res.locals.names,
    });

  },
};
