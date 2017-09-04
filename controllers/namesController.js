const namesDB = require('../models/nameDB');

module.exports = {
  //   getOne(req, res, next) {
  //   namesDB.findById(req.params.id)
  //     .then((names) => {
  //       console.log(quote);
  //       res.locals.names = names;
  //       next();
  //     })
  //     .catch(err => next(err));
  // },
  // destroy(req, res, next) {
  // namesDB.destroy(req.params.id)
  //   .then(() => next())
  //   .catch(err => next(err));
  // },
  index(req, res, next) {
    namesDB.findAll()
      .then((names) => {
        res.locals.names = names;
        next();
      })
      .catch(err => next(err));
  },
  create(req, res, next) {
    namesDB.findMonthMatch(req.body)
    .then((gen) => {
      res.locals.gen = gen.monthmatch;
      console.log(res.locals.gen, 'THIS IS GEN')
    })
    namesDB.findLetterMatch(req.body)
    .then((gen) => {
      res.locals.gen += gen.lettermatch;
      console.log(res.locals.gen, 'THIS IS GEN2')
      next();
    })
    .catch(err => next(err));
  },
}
