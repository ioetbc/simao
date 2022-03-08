import { Crumbs } from '../components/Crumbs'

const Contact = () => {
  return (
    <>
      <Crumbs />

      <div className="grid grid-cols-2 gap-3">
        <img src="https://picsum.photos/id/117/1544/1024" />
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium illum, labore sint similique minus error iusto delectus
            nemo. Ducimus animi quam beatae omnis, quia nisi est esse commodi
            incidunt sunt.
          </p>
          <div className="text-9xl">
            <p>INSTA</p>
            <p>EMAIL</p>
            <p>PHONE</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
