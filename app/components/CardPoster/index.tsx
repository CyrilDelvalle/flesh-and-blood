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

const CardPoster = ({ cardIdentifier, imageCode, width, height }: Props) => {
    return <Link href={`/card/${cardIdentifier}`}>
        <Image key={cardIdentifier} alt={cardIdentifier} width={width} height={height} src={`https://fabdb2.imgix.net/cards/printings/${imageCode}.png?w=${width}&fit=clip&auto=compress,format`} />
    </Link>
}

export default CardPoster;