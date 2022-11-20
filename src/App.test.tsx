import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const h1 = screen.getByRole('heading', { name: 'Hello' })
  expect(h1).toBeInTheDocument();
});
