import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Header, UserPosts, UserTodos } from "./components/index.js";

import {
  getUsers,
  getPostsByUser,
  getTodosByUser, // NEW
} from "./api/index.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { getCurrentUser } from "./auth";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
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
    <Router>
      <div id="App">
        <Header
          userList={userList}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />

        {currentUser !== null ? ( // MODIFIED
          <div>
            <Switch>
              <Route path="/todos">
                <UserTodos userTodos={userTodos} currentUser={currentUser} />
              </Route>
              <Route path="/posts">
                <UserPosts userPosts={userPosts} currentUser={currentUser} />
              </Route>
              <Route exact path="/">
                <h2
                  style={{
                    padding: ".5em",
                  }}
                >
                  Welcome, {currentUser.username}!
                </h2>
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <h2
                  style={{
                    padding: ".5em",
                  }}
                >
                  Please log in, above.
                </h2>
              </Route>
              <Redirect to="/" />
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
