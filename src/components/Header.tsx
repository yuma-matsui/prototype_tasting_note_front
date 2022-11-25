import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
}

const Header: FC<Props> = ({ children }) => (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Welcomeページへ</Link>
          </li>
          <li>
            <Link to="/good_night">Good Nightページへ</Link>
          </li>
        </ul>
      </nav>
    </header>
    {children}
  </>
)

export default Header