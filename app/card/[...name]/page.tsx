import { PropsWithChildren } from "react";
import { cards } from "fab-cards"
import Card from "@/app/components/pages/Card";
import { Flex } from "@radix-ui/themes";

type Props = PropsWithChildren & {
    params: { name: string[] }
}

export default function Pages({ params }: Props) {
    const cardIdentifier = params.name[0];
    const card = cards.filter(card => card.cardIdentifier === cardIdentifier)[0];

    return (
        <Flex direction="column" justify='between' align='center' style={{ padding: '11rem 10rem 0rem 10rem' }} >
            <Card {...card} />
        </Flex>
    )

}