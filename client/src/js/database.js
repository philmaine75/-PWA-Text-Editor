import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    // Assuming your database library has a 'put' method
    await db.put(content);
    console.log('Data added successfully');
  } catch (error) {
  console.error('putDb not implemented');
  }
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    // Assuming your database library has a 'get' method to retrieve all content
    const content = await db.getAll();
    console.log('Retrieved all data', content);
    return content;} catch (error) {
      console.error('getDb not implemented'); 
    }
}

initdb();
