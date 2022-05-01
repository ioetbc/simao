import { useRouter } from 'next/router'
import { Header } from '../components/Header'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router
  const isHomePage = pathname === '/'
  console.log('isHomePage', isHomePage)
  return (
    <>
      <Header isHomePage={isHomePage} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
