import React, { useMemo } from 'react';
import logo from './logo.svg';
import Video from './components/Video';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Video
          video={{
            url:"https://www.youtube.com/watch?v=gsRmtm-ilNY",
            id: "gsRmtm-ilNY",
          }}
        /> */}

        {/* example useMemo */}
        <Cart />




      {/* </header> */}
    </div>
  );
}

export default App;
