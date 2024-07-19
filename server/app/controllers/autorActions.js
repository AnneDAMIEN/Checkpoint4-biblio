const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const autor = req.body;
  try {
    const insertId = await tables.autor.create(autor);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const autors = await tables.autor.readAll();
    res.json(autors);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const autor = await tables.autor.read(req.params.id);

    if (autor == null) {
      res.sendStatus(404);
    } else {
      res.json(autor);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const autor = { ...req.body, id: req.params.id };
  try {
    await tables.badge.update(autor);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.autor.destroy(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { create, readAll, read, update, destroy };
