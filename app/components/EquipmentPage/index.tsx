'use client'

import React from 'react'
import { cards, Card as FabCard } from "fab-cards"
import CardComponent from '../CardComponent'

import { Badge, Box, Card, Flex, Text, } from '@radix-ui/themes'
import styles from './page.module.css'

const EquipmentPage = ({ name, types, cardIdentifier, functionalText, defaultImage, typeText, keywords, classes }: FabCard) => {
    const heroesList = cards.filter(card => card.classes.includes(classes[0]) && card.hero);

    console.log(heroesList)

    return (
        <section className={styles.section}>
            <div><CardComponent key={cardIdentifier} width={600} height={800} cardIdentifier={cardIdentifier} name={name} typeText={typeText} imageCode={defaultImage.split('.')[0]} /></div>
            <div className={styles.cardDescription}>
                <Card >
                    <Flex align="center">
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
                <div>
                    <Text>Can be equip by: </Text>
                    <Box>
                        {
                            heroesList.map(({ cardIdentifier, defaultImage, name, typeText }) => {
                                return <CardComponent key={cardIdentifier} width={150} height={200} name={name} cardIdentifier={cardIdentifier} typeText={typeText} imageCode={defaultImage.split('.')[0]} />
                            })
                        }
                    </Box>
                </div>
            </div>
        </section>
    )
}

export default EquipmentPage