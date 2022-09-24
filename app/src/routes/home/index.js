"use strict";

const express = require("express");
const { emitWarning } = require("process");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);


module.exports = router;
