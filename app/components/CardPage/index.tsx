import React from 'react'
import { Card as FabCard } from "fab-cards"
import CardComponent from '../CardComponent'

import { Box, Flex } from '@radix-ui/themes'
import CardDescription from '../CardDescription'

const CardPage = ({ name, cardIdentifier, functionalText, defaultImage, typeText }: FabCard) => {
    return (
        <Flex gap="3" width='100%'>
            <CardComponent key={cardIdentifier} width={600} height={800} cardIdentifier={cardIdentifier} name={name} typeText={typeText} imageCode={defaultImage.split('.')[0]} />
            <Box width='100%'>
                <CardDescription name={name} typeText={typeText} functionalText={functionalText ?? ''} />
            </Box>
        </Flex>
    )
}

export default CardPage