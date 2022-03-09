import { useRouter } from 'next/router'

export const Navigation = () => {
  const router = useRouter()
  return (
    <nav className="absolute right-8 top-8">
      <ul className="flex gap-8">
        <li onClick={() => router.push(`/plates`)}>products</li>
        <li>about</li>
        <li onClick={() => router.push(`/contact`)}>contact</li>
      </ul>
    </nav>
  )
}
