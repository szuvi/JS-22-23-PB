import { generateId } from './uuid.js';

function getUser() {
  return {
    name: 'Bob',
    id: generateId(),
  };
}

export { getUser };
