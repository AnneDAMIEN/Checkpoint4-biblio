const AbstractRepository = require("./AbstractRepository");

class AutorRepository extends AbstractRepository {
  constructor() {
    super({ table: "autor" });
  }

  async create(autor) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname) VALUES (?,?)`,
      [autor.firstname, autor.lastname]
    );

    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async update(autor) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      firstname = ?,
      lastname = ?,
      WHERE id = ?`,
      [autor.firstname, autor.lastname, autor.id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = AutorRepository;
