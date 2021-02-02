const express = require("express");
const db = require("../db");
const app = require("../app");

const router = new express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await db.query("SELECT code, name FROM companies");
    return res.json({ companies: result.rows });
  }
  catch(err) {
    return next(err);
  }
});

module.exports = router;