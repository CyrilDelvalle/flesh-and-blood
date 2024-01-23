import { Box, Card, Flex, Text, } from '@radix-ui/themes'
import React from 'react'

type Props = {
    name: string;
    typeText: string;
    functionalText: string;
}


const CardDescription = ({ name, typeText, functionalText }: Props) => {
    return (
        <Card>
            <Flex gap="3" align="center">
                <Box>
                    <Box>
                        <Text as="div" size="3" weight="bold">
                            {name}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {typeText}
                        </Text>
                    </Box>
                    <Text as="div" size="3" color="gray" style={{ marginTop: 16 }}>
                        {functionalText}
                    </Text>
                    <Box>
                    </Box>
                </Box>
            </Flex>
        </Card>
    )
}

export default CardDescription