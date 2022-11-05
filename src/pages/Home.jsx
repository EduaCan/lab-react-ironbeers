import { Link } from "react-router-dom"
import beersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"



function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", top: "0"}}>
        <Link to="/beers">
            <img className="home-imgs" src={beersImg} alt=""  />
            <h3>All Beers</h3>
        </Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis fuga adipisci sunt voluptas eaque sint, voluptates perferendis delectus vitae, atque qui molestiae accusantium dignissimos tempora nostrum inventore alias ex.</p>
        <Link to="/random-beer">
            <img className="home-imgs" src={randomBeerImg} alt=""  />
            <h3>Random Beer</h3>
        </Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis fuga adipisci sunt voluptas eaque sint, voluptates perferendis delectus vitae, atque qui molestiae accusantium dignissimos tempora nostrum inventore alias ex.</p>
        <Link to="/new-beer">
            <img className="home-imgs" src={newBeerImg} alt=""  />
            <h3>New Beer</h3>
        </Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis fuga adipisci sunt voluptas eaque sint, voluptates perferendis delectus vitae, atque qui molestiae accusantium dignissimos tempora nostrum inventore alias ex.</p>
    </div>
  )
}

export default Home