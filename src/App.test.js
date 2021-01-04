import App from './App';
import { screen, render, cleanup } from '@testing-library/react';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<App />, container);
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
