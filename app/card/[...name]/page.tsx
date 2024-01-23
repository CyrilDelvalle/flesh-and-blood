import { PropsWithChildren } from "react";
import { Card, cards, Type } from "fab-cards"
import HeroPage from "@/app/components/HeroPage";
import CardPage from "@/app/components/CardPage";
import EquipmentPage from "@/app/components/EquipmentPage";
import { Flex } from "@radix-ui/themes";

type Props = PropsWithChildren & {
    params: { name: string[] }
}

const DisplayCard = ({ card }: { card: Card }) => {
    if (card.hero)
        return <HeroPage {...card} />;
    if (card.types[0] === Type.Equipment)
        return <EquipmentPage {...card} />

    return <CardPage {...card} />
}

export default function Pages({ params }: Props) {
    const cardIdentifier = params.name[0];
    const card = cards.filter(card => card.cardIdentifier === cardIdentifier)[0];

    return (
        <Flex direction="column" justify='between' align='center' style={{ minHeight: '100rem', padding: '6rem 8rem 0rem 8rem' }} >
            <DisplayCard card={card} />
        </Flex>
    )

}