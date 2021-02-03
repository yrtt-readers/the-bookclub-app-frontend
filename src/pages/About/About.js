import React from 'react';

function About() {
  return (
    <div>
      <section className='container container-margin'>
        <h1 className='text-center'>About us</h1>
        <div className='text-left'>
          <p>
            According to the Literacy Trust, over <strong>380,000</strong>{' '}
            children in the UK do not own a single book, with disadvantaged
            children less likely than their peers to own a book.
          </p>
          <p>
            Children who own books are six times more likely to read above the
            expected level for their age (22% vs 3.6%), and nearly three times
            more likely to enjoy reading (56.2% vs 18.4%).
          </p>
          <p>
            <strong>Hundreds of thousands of children are missing out.</strong>
          </p>
          <p>
            The BookClub connects individuals to organisations (charities,
            schools, libraries, publishers, etc) that are offering free books to
            children with no books of their own.
          </p>
          <p>
            With The BookClub:
            <br />
          </p>
          <strong>An individual can:</strong>
          <ul className='functionalities'>
            <li>
              Request a book for their child from an organisation in their area
            </li>
            <li>
              Donate their unwanted children’s books to local organisations for
              redistribution
            </li>
            <li>See local events aimed at children and families</li>
          </ul>

          <strong>Organisations can:</strong>
          <ul className='functionalities'>
            <li>Display books available</li>
            <li>Create a profile for handling inquiries from individuals</li>
            <li>Add their events to our events page</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;