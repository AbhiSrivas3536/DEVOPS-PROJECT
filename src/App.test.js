import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the form title', () => {
  render(<App />);
  const headingElement = screen.getByText(/react form validation/i);
  expect(headingElement).toBeInTheDocument();
});
