import { useRouter } from 'next/router'

export const Navigation = () => {
  const router = useRouter()
  return (
    <nav className="absolute right-8 top-8">
      <ul className="flex gap-8">
        <li className="cursor-pointer" onClick={() => router.push(`/plates`)}>
          Products
        </li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer" onClick={() => router.push(`/contact`)}>
          Contact
        </li>
      </ul>
    </nav>
  )
}
