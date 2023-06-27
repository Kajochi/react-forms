import {Type} from "./type.ts"
import {ChangeEvent, FormEvent, useState} from "react";
import "./App.css";
import Visitor from "./Visitor.tsx";


const dummyVisitor: Type = {id: "olol", firstName: "Ben", lastName: "Wolf"}


export default function App() {

    const [visitorList, setVisitorList] = useState<Type[]>([dummyVisitor])
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")


    function handleFirstNameInput(event: ChangeEvent<HTMLInputElement>) {
        setFirstName(event.target.value)
    }

    function handleLastNameInput(event: ChangeEvent<HTMLInputElement>) {
        setLastName(event.target.value);
    }


    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setVisitorList([...visitorList, {
                id: "" + visitorList.length + 1,
               firstName: firstName,
                lastName: lastName,
            }])
        setFirstName("")
        setLastName("")
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Enter Input</legend>
                    <input onInput={handleFirstNameInput} value={firstName} placeholder={"firstName"}/>
                    <input onInput={handleLastNameInput} value={lastName} placeholder={"lastName"}/>
                    <button>Add Visitor</button>
                </fieldset>
            </form>
            {visitorList.map((visitor) => <Visitor visitor={visitor}/>)}
        </>
    )
}



