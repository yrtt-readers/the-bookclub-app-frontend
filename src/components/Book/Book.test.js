import { render, screen } from '@testing-library/react';
import Book from './Book';

test('renders book component', () => {
    const bookComponent = {
        book: PropTypes.object.isRequired,
        stocks: PropTypes.array.isRequired
    }

    render(<Book { ...bookComponent }/>);
    expect(bookComponent).toBeInTheDocument();
});
