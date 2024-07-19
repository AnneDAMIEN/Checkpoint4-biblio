const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const book = req.body;
  try {
    const insertId = await tables.book.create(book);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const books = await tables.book.readAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const book = await tables.book.read(req.params.id);

    if (book == null) {
      res.sendStatus(404);
    } else {
      res.json(book);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const book = { ...req.body, id: req.params.id };
  try {
    await tables.book.update(book);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.book.destroy(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { create, readAll, read, update, destroy };
