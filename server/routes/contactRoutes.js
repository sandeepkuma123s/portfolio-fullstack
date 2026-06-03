const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json({
    message: "Message saved successfully",
    contact,
  });
});

module.exports = router;