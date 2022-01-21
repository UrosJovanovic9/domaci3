import React from 'react'
import { SiThemoviedatabase } from "react-icons/si";
import { GiDramaMasks } from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import {Link } from "react-router-dom";


function NavigationBar() {
    return (
       
        <div className='navigationBar'>
           
            <div className = 'logo'>
                <SiThemoviedatabase/>
            </div>
            <Link to = "/" className = "najgledaniji">Najgledaniji filmovi</Link>
            <Link to = "/pregled"className = "pregled">Pregled filmova</Link>
            <Link to = "/prijava"className = "prijava">Prijava</Link>
            <Link to = "/registracija"className = "registracija">Registracija</Link>
             <BsSearch className = "search"/>

            
        </div>
    )
}

export default NavigationBar
