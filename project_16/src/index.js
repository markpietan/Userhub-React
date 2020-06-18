import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Header, UserPosts, UserTodos } from "./components/index.js";

import {
  getUsers,
  getPostsByUser,
  getTodosByUser, // NEW
} from "./api/index.js";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userTodos, setUserTodos] = useState([]); // NEW

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUserList(users);
      })
      .catch((error) => {
        throw error;
        // something something errors
      });
  }, []);

  useEffect(() => {
    if (currentUser === null) {
      setUserPosts([]);
      setUserTodos([]); // NEW
      return;
    }

    getPostsByUser(currentUser.id)
      .then((posts) => {
        setUserPosts(posts);
      })
      .catch((error) => {
        throw error;
        // something something errors
      });

    // NEW
    getTodosByUser(currentUser.id)
      .then((todos) => {
        setUserTodos(todos);
      })
      .catch((error) => {
        throw error;
        // something something errors
      });
  }, [currentUser]);

  return (
    <div id="App">
      <Header
        userList={userList}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      {currentUser !== null ? ( // MODIFIED
        <div>
          <UserPosts userPosts={userPosts} currentUser={currentUser} />
          <UserTodos userTodos={userTodos} currentUser={currentUser} />
        </div>
      ) : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
