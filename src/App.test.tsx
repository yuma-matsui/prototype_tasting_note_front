import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const h1 = screen.getByRole('heading', { name: 'Hello' })
  const h2 = screen.getByRole('heading', { name: 'Good Bye' })
  expect(h1).toBeInTheDocument()
  expect(h2).toBeInTheDocument()
})
