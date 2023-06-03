const { readFile } = require("fs").promises;

const path = require("path");

const contactsPath = path.join("db", "contacts.json");

async function listContacts() {
  try {
    const readContacts = await readFile(contactsPath);
    console.log(readContacts.toString());
  } catch (error) {
    console.log(error);
  }
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
const contactsManipulations = async () => {
  try {
    const readContacts = await readFile(contactsPath);
    // console.log(readContacts.toString());
    console.log(readContacts.toString());
  } catch (error) {}
};

// const contacts = {
//   readContacts,
// };

module.exports = contactsManipulations();
