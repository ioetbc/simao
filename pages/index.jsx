import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <div className='absolute bg-contain md:bg-cover bg-center bg-no-repeat bg-size h-screen w-screen bg-[url("/images/bg.jpeg")]'></div>
      <Header bgcolor={false} />
    </>
  )
}
