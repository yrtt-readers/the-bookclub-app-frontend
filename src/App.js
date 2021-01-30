import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <footer className='footer'>
        <div className='container'>
          <span className='text-body'> © 2021 The BookClub!</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
