import { cards, Card as FabCard } from "fab-cards"
import CardComponent from '../../organisms/CardComponent'

import { Box, Flex, Text, } from '@radix-ui/themes'

import CardDescription from '../../organisms/CardDescription'
import Cards from '../../molecules/Cards'

const Equipment = ({ name, cardIdentifier, functionalText, defaultImage, typeText, keywords, classes }: FabCard) => {
    const heroesList = cards.filter(card => card.classes.includes(classes[0]) && card.hero);

    return (
        <Flex gap="3" width='100%'>
            <CardComponent key={cardIdentifier} width={600} height={800} cardIdentifier={cardIdentifier} name={name} typeText={typeText} imageCode={defaultImage.split('.')[0]} />
            <Box width='100%'>
                <CardDescription name={name} typeText={typeText} functionalText={functionalText ?? ''} />
                <Text>Can be equiped by: </Text>
                <Cards cards={heroesList} />
            </Box>
        </Flex>
    )
}

export default Equipment