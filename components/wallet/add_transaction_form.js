import { addTransaction } from "../../lib/api_query";
import { Text, Button, Grid } from "@nextui-org/react";
import { useRef, useState } from "react";
import { BaseDropDown } from "./tag_dropdown/Base_dropdown";
import Field from "./Field";
import Alert from "../general/Alert";

export default function AddTransactionFrom({ setReloadTransaction, walletId, userTags }) {
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
        if (selectedTagId === 0){
            valid = false
        }
        return valid
    }

    function getInput() {
        if (checkRequired()) {
            console.log(checkRequired())
            console.log(parentRef.current.childNodes.length)
            setShowRequiredFieldAlert(false)
            addTransaction(inputDate, inputAmount, inputDesc, walletId, selectedTagId)
            setReloadTransaction(true)
        } else {
            setShowRequiredFieldAlert(true)

        }
    }

    return (
        <>
            <center>
                <Grid.Container gap={2}>
                    <Grid>
                        <div ref={parentRef}>
                            <Field setFieldInput={setInputDate} type="date" id="2" insertValues={insertValues} undesiredInput="" />
                            <Field setFieldInput={setInputAmount} type="number" id="3" insertValues={insertValues} undesiredInput="" />
                            <Field setFieldInput={setInputDesc} type="text" id="4" insertValues={insertValues} undesiredInput="" />
                        </div>
                    </Grid>
                    <Grid>
                        <BaseDropDown
                            defaultText={""}
                            userTags={userTags}
                            setSelectedTagId={setSelectedTagId}
                        />
                    </Grid>
                    <Grid>
                        <Button onPress={getInput}>Add</Button>
                    </Grid>
                    <Grid>
                        <div>
                            <Alert show={showRequiredFieldAlert} message={"All fields are required!"} />
                        </div>
                    </Grid>
                </Grid.Container>
            </center>
        </>
    )
}
