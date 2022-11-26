import { render, screen } from '@testing-library/react'
import GoodNight from '../GoodNight'

test('GoodNightコンポーネント', () => {
  render(<GoodNight />)
  const goodNight = screen.getByRole('heading', { name: 'Good Night' })
  const goodEvening = screen.getByRole('heading', { name: 'Good Evening' })

  expect(goodNight).toBeInTheDocument()
  expect(goodEvening).toBeInTheDocument()
})
