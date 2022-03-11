import { Navigation } from './Navigation'
import { Logo } from './Logo'
import { Crumbs } from '../components/Crumbs'

export const Header = ({ renderBreadcrumb = false }) => (
  <div className="flex justify-between mr-16 ml-16 mt-10 h-28">
    <div>
      <Logo />
      {/* {renderBreadcrumb && <Crumbs />} */}
    </div>
    <Navigation />
  </div>
)
