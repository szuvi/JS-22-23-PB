import { generateId } from './uuid.js';

function getTask() {
  return {
    name: 'Clean the house',
    id: generateId(),
  };
}

export { getTask };
