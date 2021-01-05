import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Main />
      </div>

      <footer className='text-center footer mt-auto py-3 bg-light'>The BookClub!</footer>
    </div>
  );
}

export default App;
