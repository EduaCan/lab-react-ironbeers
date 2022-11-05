import Header from "../components/Header"


function RandomBeer({list}) {
    const randomNumber = Math.floor(Math.random() * list.length)
    const randomBeer = list[randomNumber]

  return (
    <div>
        <Header/>
      <img className="view" src={randomBeer.image_url} alt="" width={100} />
      <h5>{randomBeer.name}</h5>
      <p>{randomBeer.tagline}</p>
      <p>First brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Created by: {randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomBeer