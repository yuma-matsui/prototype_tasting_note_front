import { render, screen } from '@testing-library/react'
import GoodNight from '../GoodNight'

test('GoodNightコンポーネント', () => {
  render(<GoodNight />)
  const goodNight = screen.getByRole('heading', { name: 'Good Night' })
  expect(goodNight).toBeInTheDocument()
})
