const express = require("express");

const router = express.Router();

const autorsRouter = require("./autor/router");
const booksRouter = require("./book/router");
const libraryRouter = require("./library/router");
const roleRouter = require("./role/router");
const userRouter = require("./user/router");

router.use("/autors", autorsRouter);
router.use("/books", booksRouter);
router.use("/libraries", libraryRouter);
router.use("/roles", roleRouter);
router.use("/users", userRouter);

module.exports = router;
