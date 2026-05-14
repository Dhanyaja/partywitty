import React from 'react'
import DrinkCard from './DrinkCard'

import drink1 from '../assets/images/drink1.png'
import drink2 from '../assets/images/drink2.png'
import drink3 from '../assets/images/drink3.png'
import drink4 from '../assets/images/drink4.png'

const drinks = [
    {
        id: 1,
        image: drink1,
        title: 'Dry Martini',
        subtitle: 'Mint, Lime, Electric Glow',
        tag: 'MOST LIKELY TO GET ACCEPTED',
        price: '999',
        selected: true,
    },
    {
        id: 2,
        image: drink2,
        title: 'Cosmopolitan',
        subtitle: 'Mint, Lime, Electric Glow',
        tag: 'Easy Choose',
        price: '199',
    },
    {
        id: 3,
        image: drink3,
        title: 'Mai Tai',
        subtitle: 'Mint, Lime, Electric Glow',
        tag: 'Most Popular',
        price: '899',
    },
    {
        id: 4,
        image: drink4,
        title: 'Wine Glass',
        subtitle: 'Mint, Lime, Electric Glow',
        tag: 'Make An Impression',
        price: '2199',
    },
    {
        id: 5,
        image: drink1,
        title: 'Dry Martini',
        subtitle: 'Mint, Lime, Electric Glow',
        tag: 'MOST LIKELY TO GET ACCEPTED',
        price: '999',
        selected: true,
    },
    {
        id: 6,
        image: drink2,
        title: 'Cosmopolitan',
        subtitle: 'Mint, Lime, Electric Glow',
        tag: 'Easy Choose',
        price: '199',
    },{
        id: 7,
        image: drink3,
        title: 'Mai Tai',
        subtitle: 'Mint, Lime, Electric Glow',
        tag: 'Most Popular',
        price: '899',
    },
    {
        id: 8,
        image: drink4,
        title: 'Wine Glass',
        subtitle: 'Mint, Lime, Electric Glow',
        tag: 'Make An Impression',
        price: '2199',
    },
]

const DrinkGrid = () => {
    return (
        <div className="grid grid-cols-2 gap-x-[14px] gap-y-[14px] mt-6">
            {drinks.map((drink) => (
                <DrinkCard
                    key={drink.id}
                    image={drink.image}
                    title={drink.title}
                    subtitle={drink.subtitle}
                    tag={drink.tag}
                    price={drink.price}
                    selected={drink.selected}
                />
            ))}
        </div>
    )
}

export default DrinkGrid