import React from 'react';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/">
        <h1>Welcome to the home page</h1>
      </Route>
      <Route exact path="/about">
        <h1>You are on the about page</h1>
      </Route>
      <Route exact path="/contact">
        <h1>Please feel free to email us</h1>
      </Route>
      <Route>
        <h1>404 Not Found</h1>
      </Route>
    </div>
  );
}

export default App;








     