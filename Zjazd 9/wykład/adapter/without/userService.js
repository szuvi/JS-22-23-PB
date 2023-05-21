import { v4 as uuidv4 } from 'uuid';

function getUser() {
  return {
    name: 'Bob',
    id: uuidv4(),
  };
}

export { getUser };
