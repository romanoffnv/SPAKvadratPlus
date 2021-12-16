import REPAIRSDATA from '../Components/General/Cards/CardData/RepCardData'
import './Homescreen.css'
import Card from '../Components/General/Cards/Card'


import React from 'react'

function Homescreen() {
    return (
        <div style = {{marginTop: '100px'}} className='products__wrapper'>
            {REPAIRSDATA.map((product) => (<Card key = {product.id} product = {product} />))}
        </div>
    )
}

export default Homescreen
