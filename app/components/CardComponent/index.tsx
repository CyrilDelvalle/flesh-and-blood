'use client'
import { Box, Flex, HoverCard, Text } from '@radix-ui/themes';
import Image from 'next/image'
import Link from 'next/link';

type Props = {
    typeText: string;
    name: string;
    cardIdentifier: string;
    imageCode: string;
    width: number;
    height: number;
}

const CardComponent = ({ typeText, name, cardIdentifier, imageCode, width, height }: Props) => {
    return <HoverCard.Root>
        <HoverCard.Trigger>
            <Link href={`/card/${cardIdentifier}`}>
                <Image key={cardIdentifier} alt={cardIdentifier} width={width} height={height} src={`https://fabdb2.imgix.net/cards/printings/${imageCode}.png?w=${width}&fit=clip&auto=compress,format`} />
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