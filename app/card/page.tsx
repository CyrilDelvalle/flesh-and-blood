import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
    params: { path: string[] }
}

export default function Pages(props: Props) {
    const pathname = props.params;

    console.log({ pathname })
}