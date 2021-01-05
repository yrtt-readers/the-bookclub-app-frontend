import Main from './Main';
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<Router><Main /></Router>, container);
});

afterEach(() => { cleanup });

describe('Main', () => {

  test('renders main component', () => {
    expect(true).toBe(true)
  });
});
