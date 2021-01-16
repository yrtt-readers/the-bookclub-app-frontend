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

  const ascBookNames = [
    "Arizona",
    "Benjamin in the snow",
    "Brave Little Tailor",
    "Hamsters",
    "Mad Jack",
    "Mathmania",
    "Red Dog",
    "Where Is Carmen Sandiego?",
    "Wider Than the Sky"
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

  // test('unsorted book names', () => {
  //   expect(JSON.stringify(bookNames) === 
  //          JSON.stringify(screen.queryAllByTestId('book_name').map(v=>v.textContent))
  //         ).toBeTruthy()
  // })

  // test('unsorted book authors', () => {
  //   expect(JSON.stringify(bookAuthors) === 
  //          JSON.stringify(screen.queryAllByTestId('book_author').map(v=>v.textContent))
  //         ).toBeTruthy()
  // })

    test('asc book names', () => {
      fireEvent.select(screen.getByTestId('sort'),{e:'title-AZ'})
      fireEvent.mouseOut(screen.getByTestId('sort'),{sortType:'title-AZ'})
      console.log(screen.queryAllByTestId('book_name').map(v=>v.textContent))
    })

})
