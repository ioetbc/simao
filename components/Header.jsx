import { Navigation } from './Navigation'
import { Logo } from './Logo'

export const Header = () => (
  <>
    <Logo />
    <nav className="absolute right-8 top-8">
      <Navigation />
    </nav>
  </>
)
