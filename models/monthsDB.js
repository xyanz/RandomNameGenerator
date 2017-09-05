const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);

//


module.exports = {
  //Get name match based on first month of name
  findAll() {
    return db.many(`
      SELECT *
      FROM months
    `);
  },
  findById(id) {
    return db.one(`
      SELECT *
      FROM months
      WHERE months.id = $1;
    `, id);
  },
  save(month) {
    console.log(month);
    month.id = Number.parseInt(month.id, 10);
    return db.one(`
      INSERT INTO months
      (month, monthMatch)
      VALUES
      ($/month/, $/monthMatch/)
      RETURNING *
    `, month);
  },
  update(month) {
    month.id = Number.parseInt(month.id, 10);
    return db.one(`
      UPDATE months
      SET
      month = $/month/,
      monthMatch = $/monthMatch/
      WHERE id = $/id/
      RETURNING *
    `, month);
  },
  destroy(id) {
    return db.none(`
      DELETE
        FROM months
       WHERE id = $1
    `, id);
  },
}
