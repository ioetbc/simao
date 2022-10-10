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
      className="grid mt-24 md:gap-20 md:grid-cols-2 max-w-8xl m-4 md:mt-0 md:mr-0 md:mb-0 md:ml-16"
    >
      <div className="md:mt-52 flex justify-between">
        <p className="max-w-xs text-lg">
          I'm always open to collaborations, swaps and skill exchanges. For all
          sales, commissions, collaborations, press and general enquiries please
          contact me.
        </p>
        <ul className="text-right mt-32">
          <li>
            <a
              className="link leading-tight"
              href="https://www.instagram.com/simao_romualdo/"
              target="_blank"
            >
              instagram
            </a>
          </li>
        
          <li className="mt-2">
            <a className="link leading-tight" href="mailto:simaoromualdo@icloud.com">
              simaoromualdo@icloud.com
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Contact
