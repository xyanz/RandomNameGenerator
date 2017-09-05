const namesDB = require('../models/nameDB');

module.exports = {
    getOne(req, res, next) {
    namesDB.findById(req.params.id)
      .then((name) => {
        console.log(name);
        res.locals.name = name;
        next();
      })
      .catch(err => next(err));
  },
  destroy(req, res, next) {
  namesDB.destroy(req.params.id)
    .then(() => next())
    .catch(err => next(err));
  },
  index(req, res, next) {
    namesDB.findAll()
      .then((names) => {
        res.locals.names = names;
        next();
      })
      .catch(err => next(err));
  },

  //Generate Name based on Month, Letter
  create(req, res, next) {
    namesDB.findMonthMatch(req.body)
    .then((gen) => {
      res.locals.gen = gen.monthmatch;
    })
    namesDB.findLetterMatch(req.body)
    .then((gen) => {
      res.locals.gen += (` ${gen.lettermatch}`);
      next();
    })
    .catch(err => next(err));
  },

  save(req, res, next) {
    namesDB.save(req.body)
      .then((name) => {
        res.locals.name = name;
        next();
      })
      .catch(err => next(err));
  },
  update(req, res, next) {
    namesDB.update(req.body)
      .then((name) => {
        res.locals.name = name;
        next();
      })
      .catch(err => next(err));
  },
  showNameForm: (req, res) => {
    res.json({
      message: 'Name Form',
    });
  },
  emptyName(req, res, next) {
    const emptyName = {
      id:         null,
      month:      null,
      monthMatch: null,
    };
    res.locals.name = emptyName;
    next();
  },

}
