'use client'
import { Box, Flex, HoverCard, Text } from '@radix-ui/themes';
import { Card, Type, Hero } from 'fab-cards';
import Image from 'next/image'
import Link from 'next/link';

type Props = Partial<Card> & {
    imageCode: string;
    width: number;
    height: number;
}


const redirection = ({ hero, types, cardIdentifier }: Partial<Card>) => {
    if (hero)
        return `/hero/${cardIdentifier}`;
    if (types && types[0] === Type.Equipment)
        return `/equipment/${cardIdentifier}`;
    return `/card/${cardIdentifier}`;
}

const CardComponent = (card: Props) => {
    const { typeText, name, cardIdentifier, imageCode, width, height, hero, types } = card;

    return <HoverCard.Root>
        <HoverCard.Trigger>
            <Link href={redirection({ hero: hero, types: types, cardIdentifier: cardIdentifier })}>
                <Image key={cardIdentifier} alt={cardIdentifier || ''} width={width} height={height} src={`https://fabdb2.imgix.net/cards/printings/${imageCode}.png?w=${width}&fit=clip&auto=compress,format`} />
            </Link>
        </HoverCard.Trigger>
        <HoverCard.Content>
            <Flex >
                <Box>
                    <Text as="div" size="3" style={{ maxWidth: 300 }} mt="3">
                        {name}
                    </Text>
                    <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
                        {typeText}
                    </Text>
                </Box>
            </Flex>
        </HoverCard.Content>
    </HoverCard.Root>
}

export default CardComponent;