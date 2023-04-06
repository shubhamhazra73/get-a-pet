import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loader from'./Loader.jsx'
export default function Home() {
  const [dogs, setDogs] = useState([])
  const [text, setText] = useState("")
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds")
        const data = await res.json()
        setDogs(data)
      } catch (error) {
        console.error(error)
      }
    }

    setSearched(false)
    fetchDogData()
  }, [])

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      )
      const data = await res.json()
      setDogs(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    searchForDog()
    setSearched(true)
  }

  return (
    <>
      {!dogs ? (
       <Loader/>
      ) : (
        <>
          
            <div className="here"  >
             
              <form onSubmit={handleSubmit} autoComplete="off" >

                <input type="text" name="search" id="search" placeholder="Search for a dog / breed" value={text} onChange={(e) => setText(e.target.value)} />

              </form>

            </div>
<section className="container" >
            <div className="here"  >
              {!searched ? (
                dogs.map((dog) => (
                  <Link
                    to={`/${dog.name}`}
                    key={dog.id}
                  >
                    <span className="here2" >

                      <img src={dog.image.url} alt={dog.name} loading="lazy" />

                      <h3 > {dog.name} </h3>

                      <p >Bred For: {dog.bred_for}</p>

                    </span>
                  </Link>
                ))
              )  : 
               (
                <>
                  {dogs.map((dog) => (
                    <Link
                      to={`/${dog.name}`}
                      key={dog.id}
                      
                    >
                      <div className="here" >
                        <img
                          src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                          alt={dog.name}
                          
                        />
                        <h3 >
                          {dog.name}
                        </h3>
                        <p >
                          Bred For: {dog.bred_for}
                        </p>
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </section>
        </>
      )}
    </>
  )
}