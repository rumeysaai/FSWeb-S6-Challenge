import React, { useEffect, useState } from "react";
import Karakter from "../components/Karakter";
import axios from "axios";
import './ContentPage.css'

const ContentPage = () => {
  const [characters, setCharacters] = useState([]);
  const [charsOnPage, setCharsOnPage] = useState([]);
  const [page, setPage] = useState(1);
  const charPerPage = 2;
  
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then((res) => {
      setCharacters(res.data);
      console.log(res.data)
    })
    .catch((err) => {
      console.error(err);
    })
  }, []);
  

  const [films, setFilms] = useState([]);

  useEffect(() => {

    axios.get("https://swapi.dev/api/films/")
      .then((res) => {
        console.log(res.data);
        setFilms(res.data);
      })

  }, []);

  return (
    <div className="App">
      <div className='search'>
        <input>
        </input>
      </div>
      <div className="content" >
        <div>
          {characters && characters.map((character, index) => {
            return <Karakter character={character} key={index}/>
          })}
          {films && films.map((film,ind) => {
            return <Karakter film={film.results} key={ind}/>
          })}
        </div>
      </div>
    </div>
  )
}
export default ContentPage;