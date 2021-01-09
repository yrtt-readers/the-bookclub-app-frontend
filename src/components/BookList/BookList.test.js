import BookList from './BookList';
import { screen, render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

let container = null;
let history = createMemoryHistory()
let mode=0

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container);
  render(
    <Router history={history}>
      <BookList mode={mode}/>
    </Router>, container
  )
})

afterEach(() => { cleanup });

describe('Book', () => {

  test('renders heading component', () => {
    expect(screen.getByRole('operation').textContent).toBe('Sort by')
  })

})
