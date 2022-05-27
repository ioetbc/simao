import { useRouter } from 'next/router'
import { useState } from 'react'
import { IoGridOutline, IoCloseCircleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

export const Navigation = () => {
  const router = useRouter()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const transition = { duration: 0.5, ease: 'easeInOut' }

  const handleRouteChange = ({ path, page }) => {
    setOpen(!open)
    router.push(`${path}/${page}`)
  }

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
          {openMobileMenu ? (
            <>
              <div
                className="cursor-pointer absolute right-3"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
              >
                <IoCloseCircleOutline size={23} color="#333" />
              </div>
              <li className="cursor-pointer">About</li>
              <li
                className="cursor-pointer relative"
                onClick={() => router.push(`/pieces`)}
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
          ) : (
            <div
              className="cursor-pointer"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              <IoGridOutline size={20} color="#333" />
            </div>
          )}
        </ul>
      </nav>

      <nav className="flex justify-end gap-8 hidden md:block">
        <ul className="flex gap-8">
          <li
            onClick={() => router.push(`/about2`)}
            className="cursor-pointer link text-lg"
          >
            About
          </li>
          <div className="relative">
            <li
              className="cursor-pointer link text-lg"
              onClick={() => setOpen(!open)}
            >
              Products
            </li>
            {open && (
              <ul className="mt-2 absolute">
                <li
                  className="cursor-pointer link"
                  onClick={() =>
                    handleRouteChange({ path: 'products', page: 'goblets' })
                  }
                >
                  Goblets
                </li>
              </ul>
            )}
          </div>
          <li
            className="cursor-pointer link text-lg"
            onClick={() => router.push(`/investigation-v2`)}
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
