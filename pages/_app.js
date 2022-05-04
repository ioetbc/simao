import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router

  return (
    <>
      {pathname !== '/investigation-v2' && (
        <Header
          showBgColor={pathname === '/' || pathname === '/investigation-v2'}
        />
      )}
      <Component {...pageProps} />
      {pathname !== '/' && <Footer />}
    </>
  )
}

export default MyApp
