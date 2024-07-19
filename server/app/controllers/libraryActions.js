const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const library = req.body;
  try {
    const insertId = await tables.library.create(library);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const libraries = await tables.library.readAll();
    res.json(libraries);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const library = await tables.library.read(req.params.id);

    if (library == null) {
      res.sendStatus(404);
    } else {
      res.json(library);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const library = { ...req.body, id: req.params.id };
  try {
    await tables.library.update(library);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.library.destroy(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { create, readAll, read, update, destroy };
