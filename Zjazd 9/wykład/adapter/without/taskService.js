import { v4 as uuidv4 } from 'uuid';

function getTask() {
  return {
    name: 'Clean the house',
    id: uuidv4(),
  };
}

export { getTask };
