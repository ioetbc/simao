import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router

  return (
    <>
      <Header showBgColor={pathname === '/' || pathname === '/investigation'} />
      <Component {...pageProps} />
      {pathname !== '/' && <Footer />}
    </>
  )
}

export default MyApp
