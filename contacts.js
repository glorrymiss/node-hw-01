const { readFile, writeFile } = require("fs").promises;
const { nanoid } = require("nanoid");

const path = require("path");

const contactsPath = path.join("db", "contacts.json");

// GET LIST ALL CONTACTS
async function listContacts() {
  try {
    const readContacts = await readFile(contactsPath);
    const listContacts = JSON.parse(readContacts);
    console.log("Contacts list", listContacts);
  } catch (error) {
    console.log(error);
  }
}
// listContacts();

// FIND CONTACT BY ID
async function getContactById(contactId) {
  try {
    const readContacts = await readFile(contactsPath);
    const listContacts = JSON.parse(readContacts);
    const getContactById = listContacts.filter(
      (contact) => contact.id === contactId
    );
    console.log("Contact has finded by id", getContactById);
  } catch (error) {
    console.log(error);
  }
}
// getContactById("e6ywwRe4jcqxXfCZOj_1e");

// --REMOVE CONTACT, NEW ARRAY
async function removeContact(contactId) {
  try {
    const readContacts = await readFile(contactsPath);
    const listContacts = JSON.parse(readContacts);
    const getNewArrayContacts = listContacts.filter(
      (contact) => contact.id !== contactId
    );
    console.log("New array after remove", getNewArrayContacts);
  } catch (error) {
    console.log(error);
  }
}
// removeContact("rsKkOQUi80UsgVPCcLZZW");

// Add contacts - new array
async function addContact(name, email, phone) {
  try {
    const objectContacts = {
      id: nanoid(),
      name: name,
      email: email,
      phone: phone,
    };
    const readContacts = await readFile(contactsPath);
    const listContacts = JSON.parse(readContacts);
    const newArray = [...listContacts, objectContacts];

    await writeFile("newJson.json", JSON.stringify(newArray));
  } catch (error) {
    console.log(error);
  }
}
// addContact("Lea Glorr", "lea123@gmail.com", "+380961234567");
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
