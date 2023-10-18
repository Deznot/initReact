import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// const elem = <h2>Hello world!</h2>; 
// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello world!');

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  const elem = (
    <div>
      <h1>Hellow world!</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(elem);
}


setInterval(tick, 1000);

