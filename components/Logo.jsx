import { useRouter } from 'next/router'

export const Logo = () => {
  const router = useRouter()

  return (
    <img
      onClick={() => router.push('/')}
      className="w-16 md:w-24 mb-auto cursor-pointer"
      src="/images/logo.svg"
    />
  )
}
