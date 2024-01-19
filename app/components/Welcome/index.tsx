'use client'

import { Card, cards } from "fab-cards"
import CardComponent from '../CardComponent'
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";

const Welcome = () => {
    const [value, setValue] = useState<string>('')
    const [initialFabCards,] = useState<Card[]>(cards.slice(0, 40).filter(card => card.rarity !== 'Promo'))
    const [fabCards, setFabCards] = useState<Card[]>(initialFabCards)
    const debouncedValue = useDebounce<string>(value, 500)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    // Fetch API (optional)
    useEffect(() => {

        if (debouncedValue.length > 2)
            setFabCards(initialFabCards.filter(fabCards => fabCards.name.toLowerCase().includes(debouncedValue)))

        // Do fetch here...
        // Triggers when "debouncedValue" changes
    }, [debouncedValue, initialFabCards])

    console.log(fabCards)

    return (
        <div>
            <div>
                <p>Value real-time: {value}</p>
                <p>Debounced value: {debouncedValue}</p>

                <input type="text" value={value} onChange={handleChange} />
            </div>
            <div>
                {
                    fabCards.map(({ cardIdentifier, defaultImage }) => {
                        return <CardComponent key={cardIdentifier} width={150} height={200} cardIdentifier={cardIdentifier} imageCode={defaultImage.split('.')[0]} />
                    })
                }
            </div>
        </div>
    )
}

export default Welcome;