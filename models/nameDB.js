const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);

//


module.exports = {
  //Get name match based on first letter of name
  findAll() {
    return db.many(`
      SELECT *
      FROM names
    `);
  },
  findLetterMatch(name) {
    const letter = req.body.name[0];
    return db.one(`
      SELECT names.lettermatch
      FROM names
      WHERE letter = ${letter}
      `, name)
  },
  //Get month match based on month
  findMonthMatch(month) {
    console.log(month, 'month')
    const monthID = month.birthMonth_id;
    return db.one(`
      SELECT *
      FROM months
      WHERE months.month = $/birthMonth_id/;
      `, month)
  }
}
