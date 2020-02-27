import React from 'react';
import me from './me.jpg';
import './App.css';
import "bulma/css/bulma.min.css"
import Counter from "./Counter";

function App() {
  return (
    <div className="App container is-fluid">
      <header className="App-header">
        <img src={me} className="App-logo" alt="me" />
        <p>
          I am <code>Shaun Wong</code> and I startIT.
        </p>
          <Counter/>
      </header>
    </div>
  );
}

export default App;
