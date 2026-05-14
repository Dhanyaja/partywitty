import React from 'react'
import GestureCard from './GestureCard'

import waveIcon from '../assets/icons/wave.svg'
import roseIcon from '../assets/icons/rose.svg'
import chocolateIcon from '../assets/icons/chocolate.svg'

const gestures = [
    {
        id: 1,
        title: 'Wave',
        price: 'FREE',
        icon: waveIcon,
    },
    {
        id: 2,
        title: 'Send a Rose',
        price: '₹10',
        icon: roseIcon,
    },
    {
        id: 3,
        title: 'Chocolate',
        price: '₹25',
        icon: chocolateIcon,
    },
]

const GestureGrid = () => {
    return (
        <div className="grid grid-cols-3 gap-[14px] mt-5">
            {gestures.map((gesture) => (
                <GestureCard
                    key={gesture.id}
                    title={gesture.title}
                    price={gesture.price}
                    icon={gesture.icon}
                />
            ))}
        </div>
    )
}

export default GestureGrid