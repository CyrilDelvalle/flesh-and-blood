import { Box } from '@radix-ui/themes'
import { Card } from 'fab-cards'
import CardComponent from '../CardComponent';

type Props = {
    cards: Card[];
}

const Cards = ({ cards }: Props) => {
    return (
        <Box>
            {
                cards.map(({ cardIdentifier, defaultImage, name, typeText }) => {
                    return <CardComponent key={cardIdentifier} width={150} height={200} name={name} cardIdentifier={cardIdentifier} typeText={typeText} imageCode={defaultImage.split('.')[0]} />
                })
            }
        </Box>
    )
}

export default Cards