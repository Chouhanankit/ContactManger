const Contact = require("../models/contactModel")


const getContacts = async (req, res) => {
    const contacts = await Contact.find();

    if (!contacts) {
        res.status(404).json({
            error: "Contacts Not Found",
        })
    }
    res.status(200).json(contacts)
}

const getContact = (req, res) => {
    res.send("Single Contact Read")
}

const contactCreate = async (req, res) => {
    
    const { name, address, isFamily, contact } = req.body

    if (!name || !contact || !address || !isFamily) {
        res.status(401).json({
            msg: "Please Fill All Deatils!!"
        })
    }


    // CREATING NEW CONTACT IN DB
    const newContact = await Contact.create({
        name,
        contact,
        address,
        isFamily
    })

    if (!newContact) {
        res.status(400).json({
            msg: "Cannot Create Contact"
        })
    }

    res.status(201).json(newContact)
    
}

const contactUpdate = (req, res) => {
    res.send("Contact is Updated")
}

const contactDelete = (req, res) => {
    res.send("Contact is Delete")
}

module.exports = { getContacts, getContact, contactDelete, contactUpdate, contactCreate }