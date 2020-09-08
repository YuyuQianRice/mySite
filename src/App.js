import React from 'react';
import MainPage from './components/mainPage/MainPage';
import logo from './logo.svg';
import './App.css';

import Header from './components/navBar/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
