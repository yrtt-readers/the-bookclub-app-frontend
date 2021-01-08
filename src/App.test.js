import App from './App';
import { screen, render, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom'

let container = null;
let history = createMemoryHistory()

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
 // render(<App />, container);
 render(
  <Router history={history}>
    <App />
  </Router>, container
);
});



afterEach(() => { cleanup });

describe('App', () => {

  test('renders heading component', () => {
    expect(screen.getByRole('heading').textContent).toBe('Books available')
  });

  test('renders footer component', () => {
    expect(screen.getByRole('contentinfo').textContent).toBe('The Book Club!')
  });
});
