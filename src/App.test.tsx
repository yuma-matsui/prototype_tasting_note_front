import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const p = screen.getByRole('heading', { name: 'Hello' })
  expect(p).toBeInTheDocument()
})
