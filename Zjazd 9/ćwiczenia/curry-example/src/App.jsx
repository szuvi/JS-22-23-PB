import { useState } from 'react';

import './App.css';

function App() {
  const [activeUser, setActiveUser] = useState('');
  const users = ['Kate', 'John', 'Bob'];

  function getClickHandler(userName) {
    return function handleClick(event) {
      console.log(event);
      setActiveUser(userName);
    };
  }

  return (
    <>
      {users.map((user) => (
        <div key={user}>
          <span style={{ color: activeUser === user ? 'red' : 'black' }}>
            {user}
          </span>
          <button onClick={getClickHandler(user)}>Activate</button>
        </div>
      ))}
    </>
  );
}

export default App;
