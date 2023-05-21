import { v4 as uuidv4 } from 'uuid';

function generateId() {
  return uuidv4();
  // return Math.random();
}

export { generateId };
