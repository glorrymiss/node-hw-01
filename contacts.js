const { readFile, writeFile } = require("fs").promises;
const { nanoid } = require("nanoid");

const path = require("path");
const { wrapper } = require("./wrapper/wrapper");

const contactsPath = path.join("db", "contacts.json");

// GET LIST ALL CONTACTS
async function listContacts() {
  const readContacts = await readFile(contactsPath);
  const allContacts = JSON.parse(readContacts);
  // console.table(allContacts);
  return allContacts;
}
listContacts();
// FIND CONTACT BY ID
async function getContactById(contactId) {
  const contactsList = await listContacts();
  const getContactById = contactsList.filter(
    (contact) => contact.id === contactId
  );
  console.log(getContactById);
}

// --REMOVE CONTACT, NEW ARRAY
async function removeContact(contactId) {
  const contactsList = await listContacts();
  const index = contactsList.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contactsList.splice(index, 1);
  await writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  console.log(result);
}

// Add contacts - new array
async function addContact(name, email, phone) {
  const objectContacts = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  };

  const contactsList = await listContacts();
  const newArray = [...contactsList, objectContacts];
  await writeFile(contactsPath, JSON.stringify(newArray, null, 2));
  console.log(newArray);
}

module.exports = {
  listContacts: wrapper(listContacts),
  getContactById: wrapper(getContactById),
  removeContact: wrapper(removeContact),
  addContact: wrapper(addContact),
};
