import React from 'react'
import { SiThemoviedatabase } from "react-icons/si";

function NavigationBar() {
    return (
       
        <div className='navigationBar'>
            <div className = 'logo'>
                <SiThemoviedatabase/>
            </div>
            <a>Najgledaniji filmovi</a>
        </div>
    )
}

export default NavigationBar
