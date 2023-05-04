import { addTransaction } from "../../lib/apiQuery";
import { Button, Row, Col } from "antd";
import { useRef, useState } from "react";
import BaseDropDown from "../DropDown";
import Field from "./Field";
import Warning from "../Alert";

export default function AddTransactionForm({ setReloadTransaction, walletId, userTags }) {
    const [inputDate, setInputDate] = useState(null)
    const [inputAmount, setInputAmount] = useState(0)
    const [inputDesc, setInputDesc] = useState("")
    const [selectedTagId, setSelectedTagId] = useState(null)
    const [showRequiredFieldAlert, setShowRequiredFieldAlert] = useState(false)
    const [values, setValues] = useState([])
    const parentRef = useRef()

    function insertValues(id, value) {
        const found = values.find(fieldData => fieldData.id === id)
        if (found) {
            updateValue(id, value)
        }
        else {
            setValues([...values, { "id": id, "state": value }])
        }
    }

    function updateValue(id, value) {
        const newValues = values.map((fieldData) => {
            if (fieldData.id === id) {
                return { "id": id, "state": value }
            }
            else { return fieldData }
        })
        setValues(newValues)
    }


    function checkRequired() {
        let valid = true

        if (parentRef.current.childNodes.length !== values.length) {
            valid = false
        }
        values.forEach((fieldData) => {
            if (fieldData.state == false) {
                valid = false
            }
        })
        if (selectedTagId === 0) {
            valid = false
        }
        return valid
    }

    function getInput() {
        if (checkRequired()) {
            setShowRequiredFieldAlert(false)
            addTransaction(inputDate, inputAmount, inputDesc, walletId, selectedTagId)
            setReloadTransaction(true)
        } else {
            setShowRequiredFieldAlert(true)
        }
    }

    return (
        <>
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                <Col ref={parentRef}>
                    <Field setFieldInput={setInputDate} type="date" id="1" insertValues={insertValues} undesiredInput="" />
                    <Field setFieldInput={setInputAmount} type="number" id="2" insertValues={insertValues} undesiredInput="" />
                    <Field setFieldInput={setInputDesc} type="text" id="3" insertValues={insertValues} undesiredInput="" />
                </Col>
                <Col>
                    <BaseDropDown
                        defaultText={""}
                        userTags={userTags}
                        setSelectedTagId={setSelectedTagId}
                    />
                </Col>
                <Col>
                    <Button onClick={getInput}>Add</Button>
                </Col >
            </Row >
            <Row>
                <Warning show={showRequiredFieldAlert} message={"All fields are required!"} />
            </Row>
        </>
    )
}
