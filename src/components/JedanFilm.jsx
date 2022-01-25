import React from 'react'
import HarryPotterDvoranaTajni from '../img/HarryPotterDvoranaTajni.jpg'
import { BsHeart, BsCheck2, BsCheckLg,BsEye} from "react-icons/bs";
import { FiMoreHorizontal} from "react-icons/fi";
import { useState } from "react";

function JedanFilm({film, prva, povecajZaJedan}) {
    // console.log(props);
    
    const[brojSvidjanja, setBrojSvidjanja] = useState(0);
    
    function povecaj(){
      setBrojSvidjanja(brojSvidjanja+1);
    }

    const[opisFilma, setOpisFilma] = useState("");
    const[i, seti] = useState(0);
    function prikaziOpis(){
        if(i % 2 === 0){
          setOpisFilma(film.opisFilma);
        }else{
          setOpisFilma("");
        }
        console.log(i);
       seti(i+1);
    }
    

    return (
        <div className = "jedanFilm">

        {prva === "jeste" ? (
        <>
        <div>
        <img
        className="slika"
        src={film.slika}
      />
      <div className = "opisFilma">{opisFilma}</div>
      </div>
      <div className="centered">Pogledaj film</div>

      <div className="jedanFilmTekst">
        <p className="jedanFilmNaslov">{film.naziv}</p>
        <p className="jedanFilmOpis">{film.opis}</p>
      </div>


      <button className="btn3" onClick = {() => povecajZaJedan(film.id)}> 
         <BsEye /> 
       </button>

      <button className="btn1" onClick={povecaj} >
        <BsHeart />
       </button>

      <button className="btn2" onClick={prikaziOpis}> 
         <FiMoreHorizontal /> 
       </button>
       

       <p>{brojSvidjanja}</p> 
       </>) : (<>
        
       <table className="tabela">
        {/* <thead> } */}
          {/* <tr>
            <th>Naziv filma</th>
            <th>Ocena</th>
            <th>Pregledi</th>
          </tr> */}
        {/* { </thead> */}
        {/* <tbody>
          
          <tr>
            <td>{film.naziv}</td>
            <td>{film.ocena}</td>
            <td>{film.pregled}</td>
          </tr>

        </tbody> */}
        </table>
        

        {/* <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody> */}

        {/* <h2>Naziv: {film.naziv}</h2> */}
       {/* <h3>Ocena: {film.ocena}</h3> */}
       {/* <h3>Pregled: {film.pregled}</h3> */}
       


       </>)}
     
      
      </div>
    )
}

export default JedanFilm
