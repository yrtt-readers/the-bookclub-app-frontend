import BookList from './components/BookList/BookList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <BookList />
      <footer className='text-center mt-auto py-3 bg-light'>The BookClub!</footer>
    </div>
  );
}

export default App;
