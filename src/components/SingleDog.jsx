import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function SingleDog() {
  const [dog, setDog] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        )
        const data = await res.json();
        setDog(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSingleDogData()
  }, [name])

  return (
    <>
      <section id="singleDog" className="">
        {dog.map((dogObject) => (
          <div key={dogObject.id} className="" >
            <article>
<img src={`https://cdn2.thedogapi.com/images/${dogObject.reference_image_id}.jpg`} alt={dogObject.name}/>
            </article>
            <article>
              <h1 className=""> {dogObject.name} </h1>
              {dogObject.description && (
                <p className="">
                  {dogObject.description}
                </p>
              )}

              <ul className="">
                <li>
                  <span className="">Bred For:</span>{" "}
                  {dogObject.bred_for}
                </li>

                <li>
                  <span className="">Height:</span>{" "}
                  {dogObject.height.metric} cm
                </li>

                <li>
                  <span className="">Weight:</span>{" "}
                  {dogObject.weight.metric} kgs
                </li>

                <li>
                  <span className="">Breed Group:</span>{" "}
                  {dogObject.breed_group}
                </li>

                <li>
                  <span className="">Lifespan:</span>{" "}
                  {dogObject.life_span}
                </li>

                <li>
                  <span className="">Temperament:</span>{" "}
                  {dogObject.temperament}
                </li>

              </ul>

              <Link to="/" className="" >
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  )
}