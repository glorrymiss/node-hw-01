const { readFile, writeFile } = require("fs").promises;
const { nanoid } = require("nanoid");

const path = require("path");

const contactsPath = path.join("db", "contacts.json");

// GET LIST ALL CONTACTS
async function listContacts() {
  try {
    const readContacts = await readFile(contactsPath);
    const listContacts = JSON.parse(readContacts);
    return listContacts;
  } catch (error) {
    console.log(error);
  }
}

// FIND CONTACT BY ID
async function getContactById(contactId) {
  try {
    const contactsList = await listContacts();
    const getContactById = contactsList.filter(
      (contact) => contact.id === contactId
    );
    return getContactById;
  } catch (error) {
    console.log(error);
  }
}

// --REMOVE CONTACT, NEW ARRAY
async function removeContact(contactId) {
  try {
    const contactsList = await listContacts();
    const getNewArrayContacts = contactsList.filter(
      (contact) => contact.id !== contactId
    );
    return getNewArrayContacts;
  } catch (error) {
    console.log(error);
  }
}

// Add contacts - new array
async function addContact(name, email, phone) {
  try {
    const objectContacts = {
      id: nanoid(),
      name: name,
      email: email,
      phone: phone,
    };

    const contactsList = await listContacts();
    const newArray = [...contactsList, objectContacts];
    await writeFile(contactsPath, JSON.stringify(newArray));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
