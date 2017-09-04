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
    name.FirstName = name.FirstName[0];
    console.log(name.FirstName, 'FirstName')
    return db.one(`
      SELECT names.letterMatch
      FROM names
      WHERE names.letter = $/FirstName/
      `, name)
  },
  //Get month match based on month
  findMonthMatch(month) {
    console.log(month, 'month')
    return db.one(`
      SELECT months.monthMatch
      FROM months
      WHERE months.month = $/birthMonth_id/;
      `, month)
  }
}
