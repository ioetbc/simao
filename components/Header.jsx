import { Navigation } from './Navigation'
import { Logo } from './Logo'

export const Header = () => (
  <div className="flex justify-between mr-16 ml-16 mt-10 h-28">
    <Logo />
    <Navigation />
  </div>
)
