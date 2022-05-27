import { Head } from 'next/head'
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
      {pathname !== '/' && pathname !== '/about' && <Footer />}
    </>
  )
}

export default MyApp

// TODO
// smaller images on the investigation page
// fix the layout of the investigation page by creating a grid layout
// smaller title and more opacity on the homepage
// fix the navigation on the homepage
// smaller images on the plates page
// add favicon
// add site description
// make the plates animation only run once
// make the header only animate once
// add in the carbon offset stamp
