import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import Counter from './Counter';
import Form from './Form';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Posts from './Posts';
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
          <li><Link to="/Posts/1">Posts id 1</Link></li>
          <li><Link to="/Posts/2">Posts id 2</Link></li>
          <li><Link to="/Posts?fname=Natjang&lname=Socute">Posts Natthaya</Link></li>
        </ul>
      </>
      <Routes>
        <Route path ="/" element={<Hello/>}/>
        <Route path ="/Counter" element={<Counter/>}/>
        <Route path ="/BMI" element={<Form />}/>
        <Route path ="/Posts" element={<Posts />}/>
        <Route path ="/Posts/:id" element={<Posts />}/>
        <Route path ="/Posts/:id/:name" element={<Posts />}/>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
