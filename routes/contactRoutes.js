const express = require("express");
const { getContacts, contactCreate, contactUpdate, getContact, contactDelete } = require("../controller/contactController");

const router = express.Router();

router.get("/", getContacts)

router.post("/", contactCreate)

router.put("/", contactUpdate)

router.get("/:id", getContact)

router.delete("/:id", contactDelete)

module.exports = router;