import Book from './Book';
import { jest, screen, render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'


let container = null;
let history = createMemoryHistory()
let mode=0
let isbn=0
let stocks=[]
let func = ()=>{};

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  render(
    <Router history={history}>
      <Book mode={mode} isbn={isbn} stocks={stocks} setStocks={func}/>
    </Router>, container
  );
});

afterEach(() => { cleanup });

describe('Book', () => {

  test('renders book component', () => {
    expect(true).toBe(true)
  });
});
