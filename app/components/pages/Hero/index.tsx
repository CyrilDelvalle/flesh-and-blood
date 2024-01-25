import React from 'react'
import { Card, Type, Class, cards } from "fab-cards"
import { Box, Flex, Text, } from '@radix-ui/themes'
import CardDescription from '../../organisms/CardDescription'
import Cards from '../../molecules/Cards'
import Image from 'next/image'

const Hero = (card: Card) => {
    const WIDTH = 525;
    const HEIGHT = 700;
    const { name, typeText, cardIdentifier, functionalText, defaultImage, classes, intellect, life } = card;
    const equipmentList = cards.filter(card => card.types[0] === Type.Equipment && card.classes[0] === classes[0]);
    const genericEquipmentList = cards.filter(card => card.types[0] === Type.Equipment && card.classes[0] === Class.Generic);
    const sortedEquipments = [...equipmentList, ...genericEquipmentList].sort((a: Card, b: Card) => a.subtypes[0].toLowerCase().localeCompare(b.subtypes[0].toLowerCase()))

    return (
        <>
            <Flex gap="8" >
                <Image key={cardIdentifier}
                    alt={cardIdentifier}
                    width={WIDTH}
                    height={HEIGHT}
                    src={`https://fabdb2.imgix.net/cards/printings/${defaultImage.split('.')[0]}.png?w=${WIDTH}&fit=clip&auto=compress,format`} />
                <Box width='100%' style={{ padding: '2rem 0rem' }} >
                    <CardDescription name={name} typeText={typeText} intellect={intellect} life={life} functionalText={functionalText ?? ''} />
                </Box>
            </Flex>
            <Box>
                <Text>Can equip: </Text>
                <Cards cards={sortedEquipments} />
            </Box>
        </>
    )
}

export default Hero