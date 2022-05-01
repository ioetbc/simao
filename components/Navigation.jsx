import { useRouter } from 'next/router'
import { useState } from 'react'

import { motion } from 'framer-motion'

export const Navigation = () => {
  const router = useRouter()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const transition = { duration: 0.5, ease: 'easeInOut' }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ...transition, delay: 1.5 }}
    >
      <nav className="md:hidden">
        <ul
          className="text-left pl-4 h-screen z-50 pr-4"
          style={{
            width: openMobileMenu ? '70vw' : 20,
            height: openMobileMenu ? '100vh' : 0,
            background: '#e9e8dd',
            position: openMobileMenu ? 'fixed' : 'relative',
            top: openMobileMenu ? '1rem' : 0,
            right: 0,
            paddingRight: '1rem',
            marginTop: openMobileMenu ? '-1rem' : 0,
            paddingTop: openMobileMenu ? '1rem' : 0,
          }}
        >
          <div onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            <img
              className="w-4 max-w-none ml-auto mb-4"
              src="/images/plus.svg"
              alt="menu"
            />
          </div>
          {openMobileMenu && (
            <>
              <li className="cursor-pointer">About</li>

              <li
                className="cursor-pointer relative"
                onClick={() => router.push(`/plates`)}
              >
                Pieces
              </li>

              <li
                className="cursor-pointer"
                onClick={() => router.push(`/contact`)}
              >
                Contact
              </li>
            </>
          )}
        </ul>
      </nav>

      <nav className="flex justify-end gap-8 hidden md:block">
        <ul className="flex gap-8">
          <li
            onClick={() => router.push(`/about`)}
            className="cursor-pointer link text-lg"
          >
            About
          </li>
          <li
            className="cursor-pointer link text-lg"
            onClick={() => router.push(`/plates`)}
          >
            Pieces
          </li>
          <li
            className="cursor-pointer link text-lg"
            onClick={() => router.push(`/investigation`)}
          >
            Investigation
          </li>
          <li
            className="cursor-pointer link text-lg"
            onClick={() => router.push(`/contact`)}
          >
            Contact
          </li>
        </ul>
      </nav>
    </motion.div>
  )
}
