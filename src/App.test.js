import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main title link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Crypto-parrot client/i);
  expect(linkElement).toBeInTheDocument();
});
