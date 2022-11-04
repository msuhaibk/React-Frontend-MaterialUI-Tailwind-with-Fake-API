import { render, screen } from '@testing-library/react';
// import App from '../App';
import { Users } from '../pages';

test('renders Users Data', () => {
  render(<Users />);
  const linkElement = screen.getByText(/Users/i);
  expect(linkElement).toBeInTheDocument();
});
