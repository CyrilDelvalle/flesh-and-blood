import React from 'react'
import { Card as FabCard } from "fab-cards"
import Image from 'next/image'
import { Box, Flex } from '@radix-ui/themes'
import CardDescription from '../CardDescription'

const CardPage = ({ name, cardIdentifier, functionalText, defaultImage, typeText }: FabCard) => {
    const WIDTH = 600;
    const HEIGHT = 800;

    return (
        <Flex gap="3" width='100%'>
            <Image key={cardIdentifier}
                alt={cardIdentifier}
                width={WIDTH}
                height={HEIGHT}
                src={`https://fabdb2.imgix.net/cards/printings/${defaultImage.split('.')[0]}.png?w=${WIDTH}&fit=clip&auto=compress,format`} />
            <Box width='100%'>
                <CardDescription name={name} typeText={typeText} functionalText={functionalText ?? ''} />
            </Box>
        </Flex>
    )
}

export default CardPage