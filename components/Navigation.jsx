import { useRouter } from 'next/router'
import { useState } from 'react'
import { IoGridOutline, IoCloseCircleOutline } from 'react-icons/io5'
import { Logo } from './Logo'

import { motion } from 'framer-motion'
import styled from 'styled-components'

const AnimatedMenuItems = styled.div`
  .item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .sub-link {
    font-size: 24px;
  }
  li {
    font-size: 32px;
    line-height: 64px;
    text-align: center;
    text-transform: uppercase;
  }
  /* .link:focus,
  .link:active {
    background: red;
    height: 200px;
    width: 20px;
  } */
`

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
            width: openMobileMenu ? '100vw' : 20,
            height: openMobileMenu ? '100vh' : 0,
            background: '#e9e8dd',
            position: openMobileMenu ? 'fixed' : 'relative',
            top: openMobileMenu ? '1rem' : 0,
            right: 0,
            paddingRight: '1rem',
            marginTop: openMobileMenu ? '-1rem' : 0,
            // paddingTop: openMobileMenu ? '1rem' : 0,
          }}
        >
          {openMobileMenu ? (
            <>
              <div>
                <Logo showAnimation={true} className="absolute top-3" />
              </div>
              <div
                className="cursor-pointer absolute right-3 top-3"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
              >
                <IoCloseCircleOutline size={23} color="#333" />
              </div>
              <AnimatedMenuItems>
                <div className="item-container">
                  <li>About</li>
                  <li
                    className="cursor-pointer link text-lg"
                    onClick={() => setOpen(!open)}
                  >
                    Pieces
                  </li>
                  {open && (
                    <ul className="mt-2 md:absolute">
                      <li
                        className="cursor-pointer link sub-link"
                        onClick={() =>
                          handleRouteChange({
                            path: 'products',
                            page: 'vesels',
                          })
                        }
                      >
                        vesels
                      </li>
                      <li
                        className="cursor-pointer link sub-link"
                        onClick={() =>
                          handleRouteChange({
                            path: 'products',
                            page: 'teaBowls',
                          })
                        }
                      >
                        tea bowls
                      </li>
                      <li
                        className="cursor-pointer link sub-link"
                        onClick={() =>
                          handleRouteChange({
                            path: 'products',
                            page: 'bowls',
                          })
                        }
                      >
                        bowls
                      </li>
                      <li
                        className="cursor-pointer link sub-link"
                        onClick={() =>
                          handleRouteChange({
                            path: 'products',
                            page: 'plates',
                          })
                        }
                      >
                        plates
                      </li>
                    </ul>
                  )}
                  <li onClick={() => router.push(`/contact`)}>Contact</li>
                </div>
              </AnimatedMenuItems>
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
