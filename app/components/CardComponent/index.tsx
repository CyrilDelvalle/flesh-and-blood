import Image from 'next/image'
import Link from 'next/link';

type Props = {
    cardIdentifier: string;
    imageCode: string;
    width: number;
    height: number;
}

const CardComponent = ({ cardIdentifier, imageCode, width, height }: Props) => {
    return <Link href={`/card/${cardIdentifier}`}><Image key={cardIdentifier} alt={cardIdentifier} width={width} height={height} src={`https://fabdb2.imgix.net/cards/printings/${imageCode}.png?w=${width}&fit=clip&auto=compress,format`} /></Link>
}

export default CardComponent;