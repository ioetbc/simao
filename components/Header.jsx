import { Navigation } from './Navigation'
import { Logo } from './Logo'

export const Header = ({ showBgColor }) => (
  <div
    className={`flex fixed ${
      !showBgColor && 'bg-lightGreen'
    } z-10 justify-between mr-4 mr-4 md:mr-0 md:ml-0 pt-4 h-14 fixed top-0 pl-4 md:pl-16 pr-4 md:pr-16 md:pt-12 md:mb-8 w-full md:h-28`}
  >
    <div>
      <Logo />
    </div>
    <Navigation />
  </div>
)
