'use client'

import { Card, cards } from "fab-cards"
import CardComponent from '../CardComponent'
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";
import { Box, Flex, TextField, TextFieldInput } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const Welcome = () => {
    const [value, setValue] = useState<string>('')
    const [initialFabCards,] = useState<Card[]>(cards.slice(0, 100).filter(card => card.rarity !== 'Promo'))
    const [fabCards, setFabCards] = useState<Card[]>(initialFabCards)
    const debouncedValue = useDebounce<string>(value, 500)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    useEffect(() => {
        if (!debouncedValue.length)
            setFabCards(initialFabCards)
        if (debouncedValue.length > 2)
            setFabCards(initialFabCards.filter(fabCards => fabCards.name.toLowerCase().includes(debouncedValue)));
    }, [debouncedValue, initialFabCards])

    return (
        <Flex direction='column' align='center' gap="8">
            <Box style={{ width: 400 }}>
                <TextField.Root >
                    <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>
                    <TextField.Input placeholder="Search a card…" onChange={handleChange} />
                </TextField.Root>
            </Box>
            <Flex wrap='wrap' justify='center'>
                {
                    fabCards.map(({ cardIdentifier, defaultImage, name, typeText }) => {
                        return <CardComponent key={cardIdentifier} width={150} height={200} cardIdentifier={cardIdentifier} name={name} typeText={typeText} imageCode={defaultImage.split('.')[0]} />
                    })
                }
            </Flex>
        </Flex>
    )
}

export default Welcome;