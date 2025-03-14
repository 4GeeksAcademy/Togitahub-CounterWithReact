import React from 'react';
import ReactDOM from 'react-dom/client';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// components
import Counter from './components/Counter';
import Title from './components/Title';
import Button from './components/Button';

let increment = 0;

const stopInterval = () => clearInterval(counterInterval);

const counterInterval = setInterval(() => {
  increment++;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Title />
      <Counter count={increment} />
      <Button style="btn btn-danger shadow" method={stopInterval} label="DETENER COUNTER" />
    </React.StrictMode>,
  );
}, 1000);
