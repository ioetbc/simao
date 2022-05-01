import { motion } from 'framer-motion'

const Contact = () => {
  return (
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
      <div className="md:mt-52">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          eos repellendus, nostrum ratione perferendis veritatis. Explicabo,
          eveniet? Laborum asperiores a incidunt dolore amet expedita vel
          officia doloremque dolor. Repudiandae, ducimus. `
        </p>
        <ul className="mt-4">
          <li className="mt-4">
            <a href="https://www.instagram.com/simao_romualdo/" target="_blank">
              ( instagram )
            </a>
          </li>
          <li className="mt-4">
            <a href="mailto:ioetbc@gmail.com">( email )</a>
          </li>
          <li className="mt-4">
            <a href="tel:07493774943">( phone )</a>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Contact
