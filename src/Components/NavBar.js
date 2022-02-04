import React from 'react'
import './NavBar.css';
import { Image } from 'react-bootstrap';



function NavBar() {
    return (
        <div>


            <div className="navBar">
                <Image className='logo' src='Images/Logo.svg' alt='logo' />

                <div className="options">
                    <button className='btn'>Home</button>
                    <button className='btn '>Quizzes</button>
                    <button className='btn Responsive'>Contribute</button>
                    <button className='btn Responsive' >About</button>

                </div>

            </div>

        </div>
    )
}

export default NavBar

