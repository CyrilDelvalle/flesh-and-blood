import React from 'react'
import { Card as FabCard } from "fab-cards"
import CardComponent from '../CardComponent'

import { Badge, Box, Card, Flex, Text, } from '@radix-ui/themes'
import styles from './page.module.css'

const CardPage = ({ name, types, cardIdentifier, functionalText, defaultImage, typeText, keywords }: FabCard) => {
    return (
        <section className={styles.section}>
            <div><CardComponent key={cardIdentifier} width={600} height={800} cardIdentifier={cardIdentifier} name={name} imageCode={defaultImage.split('.')[0]} /></div>
            <div className={styles.cardDescription}>
                <Card >
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
                                {
                                    keywords?.map((keyWord, index) => <Badge key={index} color='orange'> {keyWord} </Badge>)
                                }

                            </Box>
                        </Box>
                    </Flex>
                </Card>
            </div>
        </section>
    )
}

export default CardPage