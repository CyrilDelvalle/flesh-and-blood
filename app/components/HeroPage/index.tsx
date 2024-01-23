import React from 'react'
import { Card, Type, cards } from "fab-cards"
import CardComponent from '../CardComponent'
import { Box, Flex, Text, } from '@radix-ui/themes'
import CardDescription from '../CardDescription'
import Cards from '../Cards'

const HeroPage = ({ name, typeText, cardIdentifier, functionalText, defaultImage, classes }: Card) => {
    const equipmentList = cards.filter(card => card.types[0] === Type.Equipment && card.classes[0] === classes[0]);
    const imageCode = defaultImage.split('.')[0];

    return (
        <Flex gap="3" width='100%'>
            <CardComponent key={cardIdentifier} width={450} height={600} cardIdentifier={cardIdentifier} name={name} typeText={typeText} imageCode={imageCode} />
            <Box width='100%'>
                <CardDescription name={name} typeText={typeText} functionalText={functionalText ?? ''} />
                <Text>Can equip: </Text>
                <Cards cards={equipmentList} />
            </Box>
        </Flex>
    )
}

export default HeroPage