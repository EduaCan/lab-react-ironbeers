import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import AllBeers from './pages/AllBeers';
import SingleBeer from './pages/SingleBeer';

import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import RandomBeer from './pages/RandomBeer';
import AddBeer from './pages/AddBeer';


function App() {

  const [list, setList] = useState([])
  const [searchList, setSearchList] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setList(response.data)
            setSearchList(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const searchBeer = async (query) => {
      // if (query===""){
      //   getData()
      // } else {
        try {
          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
          setSearchList(response.data)
        } catch (error) {
          console.log(error)
        }
      // }
    }

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers list={searchList} search={searchBeer} />} />
        <Route path="/beers/:beerid" element={<SingleBeer list={list}/>} />
        <Route path="/random-beer" element={<RandomBeer list={list}/>} />
        <Route path="/new-beer" element={<AddBeer getData={getData}/>} />

        {/* rutas de errores */}
        <Route path="/error" element={ <Error /> }/>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
