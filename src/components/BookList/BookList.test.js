/* eslint-disable */
import BookList from './BookList';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const bookNames = [
  "Wider Than the Sky",
  "Mad Jack",
  "Benjamin in the snow",
  "Mathmania",
  "Brave Little Tailor",
  "Red Dog",
  "Hamsters",
  "Arizona",
  "Where Is Carmen Sandiego?"
]

const bookAuthors = [
  "Scott Elledge",
  "Susan Mayes",
  "Anne Leblanc",
  "Highlights",
  "Andrej Dugin (Author), Olga Dugina",
  "Bill Wallace",
  "Percy Parslow",
  "USA",
  "James Buckley Jr. and Michael S. Teitelbaum"
]

let mode=0, container, divBookName, divAuthor

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
  render(
    <BrowserRouter >
      <BookList mode={mode} />
    </BrowserRouter>, container
  )
  divBookName = screen.queryAllByTestId('book_name')
  divAuthor = screen.queryAllByTestId('book_author')
})

afterEach(() => { cleanup });

describe('BookList', () => {

  test('unsorted book names', () => {
    expect(JSON.stringify(bookNames) === 
           JSON.stringify(divBookName.map(v => v.textContent))
          ).toBeTruthy()
  })

  test('unsorted book authors', () => {
    expect(JSON.stringify(bookAuthors) === 
           JSON.stringify(divAuthor.map(v=>v.textContent))
          ).toBeTruthy()
  })

})
