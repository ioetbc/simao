import { useRouter } from 'next/router'
import { useState } from 'react'

export const Navigation = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex justify-end gap-8">
      <ul className="flex gap-8">
        <li className="cursor-pointer relative" onClick={() => setOpen(!open)}>
          Products
          {open && (
            <ul className="mt-2 absolute left-4">
              <li
                className="cursor-pointer"
                onClick={() => router.push(`/plates`)}
              >
                Plates
              </li>
              <li
                className="cursor-pointer"
                onClick={() => router.push(`/bowls`)}
              >
                Bowls
              </li>
              <li
                className="cursor-pointer"
                onClick={() => router.push(`/mugs`)}
              >
                Mugs
              </li>
              <li
                className="cursor-pointer"
                onClick={() => router.push(`/all`)}
              >
                All
              </li>
            </ul>
          )}
        </li>

        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer" onClick={() => router.push(`/contact`)}>
          Contact
        </li>
      </ul>
    </nav>
  )
}
