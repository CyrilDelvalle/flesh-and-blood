import React from 'react'
import { Card as FabCard, Type, cards } from "fab-cards"
import CardComponent from '../CardComponent'

import styles from './page.module.css'
import { Box, Card, Flex, Text, } from '@radix-ui/themes'

const HeroPage = ({ name, types, typeText, cardIdentifier, functionalText, defaultImage, classes, rarity, sets, young, intellect, life }: FabCard) => {
    const equipmentList = cards.filter(card => card.types[0] === Type.Equipment && card.classes[0] === classes[0]);

    console.log({ equipmentList })
    return (
        <section className={styles.section}>
            <div><CardComponent key={cardIdentifier} width={450} height={600} cardIdentifier={cardIdentifier} name={name} typeText={typeText} imageCode={defaultImage.split('.')[0]} /></div>
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
                            </Box>
                        </Box>
                    </Flex>
                </Card>
                <div>
                    <Text>Can equip: </Text>
                    <Box>
                        {
                            equipmentList.map(({ cardIdentifier, defaultImage, name, typeText }) => {
                                return <CardComponent key={cardIdentifier} width={150} height={200} name={name} cardIdentifier={cardIdentifier} typeText={typeText} imageCode={defaultImage.split('.')[0]} />
                            })
                        }
                    </Box>
                </div>
            </div>
        </section>
    )
}

export default HeroPage