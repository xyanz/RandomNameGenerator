const monthsDB = require('../models/monthsDB');

module.exports = {
  //Get single month
  getOne(req, res, next) {
    monthsDB.findById(req.params.id)
      .then((month) => {
        res.locals.month = month;
        next();
      })
      .catch(err => next(err));
  },
  //Destroy single month
  destroy(req, res, next) {
    monthsDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
  //Get all months
  index(req, res, next) {
    monthsDB.findAll()
      .then((months) => {
        res.locals.months = months;
        next();
      })
      .catch(err => next(err));
  },
  //Empty month template for new form
  emptyMonth(req, res, next) {
    const emptyMonth = {
      id:         null,
      month:      null,
      monthMatch: null,
    };
    res.locals.month = emptyMonth;
    next();
  },
  //Save new month to db
  save(req, res, next) {
    monthsDB.save(req.body)
      .then((month) => {
        res.locals.month = month;
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    console.log(req.body, 'update controller');
    monthsDB.update(req.body)
      .then((month) => {
        res.locals.month = month;
        next();
      })
      .catch(err => next(err));
  },
  showMonthForm: (req, res) => {
    res.json({
      message: 'Month Form',
    });
  },


}
