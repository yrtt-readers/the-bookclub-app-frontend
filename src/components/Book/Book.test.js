import Book from './Book';
import { screen, render, cleanup } from '@testing-library/react';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<Book 
    mode={0}
    isbn={0}
    stocks={[]}
    setStocks={()=>{}}
  />, container);
});

afterEach(() => { cleanup });

describe('Book', () => {

  test('renders book component', () => {
    expect(true).toBe(true)
  });
});
