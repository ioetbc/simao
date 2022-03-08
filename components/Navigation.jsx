import { useRouter } from 'next/router'

export const Navigation = () => {
  const router = useRouter()
  return (
    <ul className="flex gap-8">
      <li onClick={() => router.push(`/plates`)}>products</li>
      <li>about</li>
      <li onClick={() => router.push(`/contact`)}>contact</li>
    </ul>
  )
}
