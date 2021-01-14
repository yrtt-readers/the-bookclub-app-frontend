import BookList from './BookList';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
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

describe('BookList', () => {

  test('renders sorting dropdown', () => {
    expect(screen.getByTestId('sort').textContent).toBe('Sort by')
    // expect(screen.queryByTestId('book_name').textContent).toBe('Mad Jack')

  })

})
