import { useRouter } from 'next/router'
import { Header } from '../components/Header'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router

  return (
    <>
      <Header showBgColor={pathname === '/' || pathname === '/investigation'} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
