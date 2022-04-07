import { Header } from '../components/Header'
import { Title } from '../components/Title'

export default function Home() {
  return (
    <>
      <div className='absolute bg-cover md:bg-cover bg-center bg-no-repeat bg-size h-screen w-screen bg-[url("/images/bg-mobile.jpeg")] md:bg-[url("/images/bg-desktop.jpeg")]'></div>
      <Header bgcolor={false} />
      <Title />
    </>
  )
}
