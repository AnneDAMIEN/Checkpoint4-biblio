const AutorRepository = require("./models/AutorRepository");
const BookRepository = require("./models/BookRepository");
const LibraryRepository = require("./models/LibraryRepository");
const RoleRepository = require("./models/RoleRepository");
const UserRepository = require("./models/UserRepository");

const tables = {};

tables.autor = new AutorRepository();
tables.book = new BookRepository();
tables.library = new LibraryRepository();
tables.role = new RoleRepository();
tables.user = new UserRepository();

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];

    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
