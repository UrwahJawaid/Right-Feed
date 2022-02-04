import React from 'react'
import QuizListCard from './QuizListCard'
import { QuizCardFive, QuizCardFour, QuizCardOne, QuizCardThree, QuizCardTwo } from './QuizListData'
import './QuizListDisplay.css'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'


function QuizListDisplay() {
    return (

        <div>
            <div className="nav">
                <NavBar />
            </div>

            <div className="erase">
                Article 370
            </div>


            <div className='CardListDisplay'>
                <QuizListCard {...QuizCardOne} />
                <QuizListCard {...QuizCardTwo} />
                <QuizListCard {...QuizCardThree} />

                {/* <QuizListCard {...QuizCardFour} />
                <QuizListCard {...QuizCardFive} /> */}

            </div>

            <div className="footer">
                <Footer />
            </div>

        </div>

    )
}

export default QuizListDisplay

