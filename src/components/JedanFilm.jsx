import React from 'react'
import HarryPotterDvoranaTajni from '../img/HarryPotterDvoranaTajni.jpg'
import { BsHeart, BsCheck2, BsCheckLg} from "react-icons/bs";

function JedanFilm() {
    return (
        <div className = "jedanFilm" hover-zoom>
            <img
        className="slika"
        src={HarryPotterDvoranaTajni}
        
         alt="Ovo je opis filma koji mozete videti"
      />
      <div class="centered">Pogledaj film</div>

      <div className="jedanFilmTekst">
        <h3 className="jedanFilmNaslov">Hari Poter i dvorana tajni</h3>
        <p className="jedanFilmOpis">2002 | avanturisticki</p>
      </div>


      <button className="btn1">
        <BsHeart />
       </button>

      <button className="btn2" alt= "Ovo je dugme"> 
         <BsCheckLg /> 
       </button>

       <p>7.4</p>
      
        </div>
    )
}

export default JedanFilm
