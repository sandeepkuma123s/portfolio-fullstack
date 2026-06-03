const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.get("/", (req, res) => {
  res.json({ message: "Contact API is working" });
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: contact,
    });
  } catch (error) {
    console.log("Contact Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;