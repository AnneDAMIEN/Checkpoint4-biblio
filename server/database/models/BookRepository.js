const AbstractRepository = require("./AbstractRepository");

class BookRepository extends AbstractRepository {
  constructor() {
    super({ table: "book" });
  }

  async create(book) {
    // Vérifier que toutes les clés nécessaires sont présentes dans l'objet book
    const requiredKeys = [
      "name",
      "description",
      "image",
      "autorId",
      "userId",
      "libraryId",
    ];
    const missingKeys = requiredKeys.filter((key) => !(key in book));

    if (missingKeys.length > 0) {
      throw new Error(
        `Missing required keys in book object: ${missingKeys.join(", ")}`
      );
    }

    const { name, description, image, autorId, userId, libraryId } = book;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description, image, autor_id, user_id, library_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, description, image, autorId, userId, libraryId]
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

  async update(book) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      image = ?,
      name = ?,
      description = ?
      autor_id = ?
      user_id =?
      library_id = ?
      WHERE id = ?`,
      [book.image, book.name, book.description, book.id, book.autorId]
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

module.exports = BookRepository;
