import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  Header
} from './components';

import {
    getUsers
  } from './api/index.js';
  

const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getUsers()
      .then(users => {
        setUserList(users)
      })
      .catch(error => {
        throw error
      });
    
  }, []);

  return (
    <div id="App">
      <Header userList={ userList } setCurrentUser = { setCurrentUser } currentUser= { currentUser }/>
      
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);