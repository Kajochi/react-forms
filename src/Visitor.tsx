import {Type} from "./type.ts";


type Props = {
    visitor: Type
}

export default function Visitor({visitor}: Props) {

    return (
        <section>
            <h2>{`${visitor.firstName} ${visitor.lastName}`}</h2>
            <p>{visitor.id}</p>
        </section>)

}