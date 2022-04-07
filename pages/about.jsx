import { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Header } from '../components/Header'

const About = () => {
  return (
    <>
      <Header />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="grid mt-24 md:gap-20 md:grid-cols-2 max-w-7xl m-4 md:mt-0 md:mr-0 md:mb-0 md:ml-16"
      >
        <div>
          <img src="/images/ege.jpg"></img>
        </div>
        <div className="md:mt-36">
          <h1 className="text-2xl mb-4 ">about</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eos repellendus, nostrum ratione perferendis veritatis. Explicabo,
            eveniet? Laborum asperiores a incidunt dolore amet expedita vel
            officia doloremque dolor. Repudiandae, ducimus. `
          </p>
          <p>social media</p>
          <ul>
            <li>
              <button className="mt-4">( instagram )</button>
            </li>
            <li>
              <button className="mt-4">( email )</button>
            </li>
            <li>
              <button className="mt-4">( phone )</button>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  )
}

export default About
