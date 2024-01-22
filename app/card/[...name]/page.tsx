import { PropsWithChildren } from "react";
import { Card, cards, Type } from "fab-cards"
import styles from './page.module.css'
import HeroPage from "@/app/components/HeroPage";
import CardPage from "@/app/components/CardPage";
import EquipmentPage from "@/app/components/EquipmentPage";

type Props = PropsWithChildren & {
    params: { name: string[] }
}

const displayCard = (card: Card) => {
    console.log({ card })
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
        <div className={styles.main}>
            {
                displayCard(card)

            }
        </div>
    )

}