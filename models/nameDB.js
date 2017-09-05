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
  //Get letter match based on initial
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
  },
  findById(id) {
    return db.one(`
      SELECT *
      FROM names
      WHERE names.id = $1;
    `, id);
  },
  save(name) {
    console.log(name);
    name.id = Number.parseInt(name.id, 10);
    return db.one(`
      INSERT INTO names
      (letter, letterMatch)
      VALUES
      ($/letter/, $/letterMatch/)
      RETURNING *
    `, name);
  },
    update(name) {
    return db.one(`
      UPDATE names
      SET
      letter = $/letter/,
      letterMatch = $/letterMatch/
      WHERE id = $/id/
      RETURNING *
    `, name);
  },
  destroy(id) {
    return db.none(`
      DELETE
        FROM names
       WHERE id = $1
    `, id);
  },
}
