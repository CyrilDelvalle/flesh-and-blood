'use client'

import { Box, Card, Flex, Heading, Text, } from '@radix-ui/themes'
import { Card as Fabcard } from 'fab-cards';
import { IconContext } from "react-icons";
import { FaBookReader } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const CardDescription = ({ name, typeText, functionalText, intellect, life }: Partial<Fabcard>) => {
    return (
        <Card style={{ height: '100%' }}>
            <Flex gap="3" align="center">
                <Box>
                    <Box>
                        <Heading as="h1" weight="bold">
                            {name}
                        </Heading>
                        <Text as="div" size="3" color="gray">
                            {typeText}
                        </Text>
                    </Box>
                    <Text as="div" size="3" color="gray" style={{ marginTop: '2rem' }}>
                        {functionalText}
                    </Text>
                    <Box>
                        <IconContext.Provider value={{ size: '5rem' }}>
                            <Flex gap='2'>
                                <FaBookReader />
                                <Text>{intellect}</Text>
                            </Flex>
                            <Flex>
                                <FaHeart />
                                <Text>{life}</Text>
                            </Flex>
                        </IconContext.Provider>
                    </Box>
                </Box>
            </Flex>
        </Card>
    )
}

export default CardDescription