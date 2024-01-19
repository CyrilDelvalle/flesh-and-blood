import { PropsWithChildren } from "react";
import { cards } from "fab-cards"

type Props = PropsWithChildren & {
    params: { name: string[] }
}

export default function Pages({ params }: Props) {
    const cardIdentifier = params.name[0];
    const card = cards.filter(card => card.cardIdentifier === cardIdentifier);

    return (
        <p>{JSON.stringify(card)}</p>
    )

}