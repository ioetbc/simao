import { motion } from 'framer-motion'

const About = () => {
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
      className="mt-24 m-4 lg:mt-0 lg:mb-0 lg:ml-16 lg:mr-16"
    >
      <div className="mt-52 mb-32">
        <div className="">
          <div className="lg:flex gap-40">
            <div className="mb-12 md:ml-20 md:max-w-md lg:ml-0 lg:max-w-md lg:mb-32 xl:ml-0 xl:max-w-xl">
              <p className="text-xl">
                My favourite place to be is the moment where I am not bound by
                thought, but rather in a state of pure physical being. Making
                with my hands makes me feel this way whilst connecting me with
                my heart. Creating hand-made artifacts from clay, stones, the
                earth, is my way of discovering inner strength and feel
                grounded.
              </p>
              <p className="mt-4 text-xl">
                I am an artist working with clay as a primary material. Using
                hand building as well wheel throwing techniques, I create
                objects that exist between sculpture, function and craft.
                Drawing upon ecological, archaeological references and feeling,
                I embrace the material as well as the process of making with
                passion and curiosity. These objects and their making convey
                more than their material properties of shape and form. It is
                myself in them. They begin as elements in a realm of emotion and
                desire, before coming into the world to be held by hands. These
                things are images of my own soul. To me, the act of making is
                physical poetry, guided by hands and heart and these artifacts,
                are imprints of my soul and love.
              </p>
            </div>
            <div className="mb-12 md:max-w-md md:ml-auto lg:max-w-xl lg:mt-80">
              <p className="text-xl">
                In today&apos;s world - where we are often surrounded by digital
                experiences - I invite everyone to slow down through my work, to
                hold something in your hands, and to pause for a moment of pure
                being. Like every human on this earth my pieces are unique, one
                of a kind, and in them imperfection is celebrated. They embrace
                no material hierarchy, but are guided by a nature-based
                aesthetic. Through my pieces I hope to inspire a connection and
                revive an awareness with the natural world and the source of our
                beings.
              </p>
              <p className="mt-4 text-xl">
                Brazilian born, trained in England and the USA, with a
                background in Interior &amp; Spatial Design, I began working in
                ceramics in 2021 and continue my practice-led exploration into
                functional and sculptural ceramic vessels, hand-making each
                piece currently from London, UK.
              </p>
            </div>
          </div>
          <div>
            <p className="md:ml-20 md:max-w-md lg:max-w-xl lg:-mt-10 text-lg">
              I recognise that a contemporary ceramics practice can be
              ecologically damaging due to its reliance on mined raw materials
              and energy for firings. In an effort to reduce my environmental
              impact, I am also investigating new aspects of making in my
              practice including the use of materials, processes and influences.
            </p>
            <p className="md:ml-20 md:max-w-md lg:max-w-xl mt-10 text-lg">
              My main inspiration is the natural world and I want to work in
              ways that honour the materials past, present and future. This is
              an ongoing work and intent to continue searching for new practices
              in the future. I would be happy to have a dialogue with
              like-minded people on the subject; please email me at{' '}
              <a className="text-lg" href="mailto:simaoromualdo@icloud.com">
                simaoromualdo@icloud.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
