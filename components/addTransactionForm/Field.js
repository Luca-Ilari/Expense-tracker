import { Input } from "@nextui-org/react";
import { useRef } from "react";

export default function Field({ type, id, setFieldInput, insertValues, undesiredInput }) {
    const value = useRef()

    function checkValidity() {
        if (value.current.value !== undesiredInput) {
            setFieldInput(value.current.value)
            insertValues(id, true)
        } else {
            insertValues(id, false)
        }
    }

    return (
        <Input ref={value} type={type} aria-label={type} onChange={checkValidity}></Input>
    )
}