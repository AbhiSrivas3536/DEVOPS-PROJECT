import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form';

test('renders form with all fields', () => {
  render(<Form />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
});

test('shows error on invalid email', () => {
  render(<Form />);
  const emailInput = screen.getByLabelText(/email/i);
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
  fireEvent.blur(emailInput);
  expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
});
