import { render, screen } from '@testing-library/react'
import GoodMorning from '../GoodMorning'

test('GoodNightコンポーネント', () => {
  render(<GoodMorning />)
  const goodMorning = screen.getByRole('heading', { name: 'Good Morning' })
  expect(goodMorning).toBeInTheDocument()
})
