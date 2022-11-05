import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function AllBeers({ list, search }) {
  const [queryInput, setQueryInput] = useState("");

  const handleQueryChange = (event) => {
    setQueryInput(event.target.value)
    search(queryInput);
};

    useEffect(()=>{
        search(queryInput)
    },[])

  return (
    <div>
      <Header />
      <form style={{margin: "0vh 5vw 0 5vw", position: "fixed", top:"5vh", width: "90vw", backgroundColor: "white", paddingTop: "1vh"}}>
        <label htmlFor="query" >Search:</label>
        <input
          type="text"
          name="query"
          value={queryInput}
          onChange={handleQueryChange}
        />
      </form>
      {list.map((eachBeer) => {
        return (
          <div className="list-view" key={eachBeer._id}>
            <Link to={`/beers/${eachBeer._id}`}>
              <img src={eachBeer.image_url} alt="" width={75} />
              <h5>{eachBeer.name}</h5>
            </Link>
            <p>{eachBeer.tagline}</p>
            <p>Created by: {eachBeer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
