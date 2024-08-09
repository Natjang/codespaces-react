import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import Counter from './Counter';
import Form from './Form';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Hello name ="Natjang" surname ="eiei"/>*/}
    <BrowserRouter>
      <>
        <ul>
          <li><Link to="/">Hello</Link></li>
          <li><Link to="/Counter">Counter</Link></li>
          <li><Link to="/BMI">BMI</Link></li>
        </ul>
      </>
      <Routes>
        <Route path ="/" element={<Hello/>}/>
        <Route path ="/Counter" element={<Counter/>}/>
        <Route path ="/BMI" element={<Form />}/>

      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
