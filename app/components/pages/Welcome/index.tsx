'use client'

import { Card, cards } from "fab-cards"
import CardComponent from '../../organisms/CardComponent'
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";
import { Flex, Heading, Text } from "@radix-ui/themes";
import SearchBar from "../../molecules/SearchBar";

const Welcome = () => {
    const [value, setValue] = useState<string>('')
    const [initialFabCards,] = useState<Card[]>(cards.filter(card => card.rarity !== 'Promo'))
    const [fabCards, setFabCards] = useState<Card[]>()
    const debouncedValue = useDebounce<string>(value, 500)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    useEffect(() => {
        if (!debouncedValue.length)
            setFabCards([])
        if (debouncedValue.length > 2)
            setFabCards(initialFabCards.filter(fabCards => fabCards.name.toLowerCase().includes(debouncedValue)));
    }, [debouncedValue, initialFabCards])

    return (
        <Flex direction='column' align='center' gap="8" style={{ paddingTop: '3rem' }}>
            <Heading size='8'>Welcome to flesh and search</Heading>
            <SearchBar handleChange={handleChange} />
            <Flex wrap='wrap' justify='center'>
                {
                    fabCards?.map(({ hero, types, cardIdentifier, defaultImage, name, typeText }) => {
                        return <CardComponent
                            key={cardIdentifier}
                            width={300}
                            height={400}
                            cardIdentifier={cardIdentifier}
                            name={name}
                            typeText={typeText}
                            imageCode={defaultImage.split('.')[0]}
                            hero={hero}
                            types={types}

                        />
                    })
                }
            </Flex>
        </Flex>
    )
}

export default Welcome;