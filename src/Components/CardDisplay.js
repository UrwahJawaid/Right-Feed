import React from 'react'
import { CardOne, CardThree, CardTwo } from './CardsData'
import CardRow from './CardsRow'
import './CardDisplay.css'

function CardDisplay() {
    return (
        <div className='cardDisplay'>

            <CardRow {...CardOne} />
            <CardRow {...CardTwo} />
            <CardRow {...CardThree} />

        </div>
    )
}

export default CardDisplay
