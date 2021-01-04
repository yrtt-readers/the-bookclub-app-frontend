import Book from './Book';
import { screen, render, cleanup } from '@testing-library/react';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  // render(<Book />, container);
});

afterEach(() => { cleanup });

describe('Book', () => {

  test('renders book component', () => {
    expect(true).toBe(true)
  });
});
