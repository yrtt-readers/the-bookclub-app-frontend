import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
 render(<BrowserRouter> <App /> </BrowserRouter>);
  //render(<App />);
  //const brandElement = screen.getByText(/The BookClub/i);
  const brandElement = screen.getAllByText(/The BookClub/i);
  console.log(brandElement);
  //expect(brandElement).toBeInTheDocument();
  //expect(brandElement).length.toBe(1)

});
