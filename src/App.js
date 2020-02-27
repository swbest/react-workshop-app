import React from 'react';
import me from './me.jpg';
import './App.css';
import "bulma/css/bulma.min.css"

function App() {
  return (
    <div className="App container is-fluid">
      <header className="App-header">
        <img src={me} className="App-logo" alt="me" />
        <p>
          I am <code>Shaun Wong</code> and I startIT.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
