import { addTransaction } from "../../lib/api_query";
import { Input, Button, Grid } from "@nextui-org/react";
import { cloneElement, useRef, useState } from "react";
import { BaseDropDown } from "./tag_dropdown/Base_dropdown";
import Field from "./Field";

export default function AddTransactionFrom({ setReloadTransaction, walletId, userTags }) {
    const inputDate = useRef(null)
    const inputAmount = useRef(0)
    const inputDesc = useRef("")
    const [selectedTagId, setSelectedTagId] = useState(null)
    const [requiredField, setRequiredField] = useState(false)
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
        
        // verificare che parentRef.current.childNodes.length sia uguale alla lunghezza array
        if(parentRef.current.childNodes.length !== values.length){
            valid = false
        }
        values.forEach((fieldData) => {
            if (fieldData.state == false) {
                valid = false
            }
        })
        console.log("valid " + valid);

        return valid
    }

    function getInput() {
        if (checkRequired()) {
            console.log(checkRequired());
            console.log(parentRef.current.childNodes.length)
            setRequiredField(true)
            addTransaction(inputDate.current.value, inputAmount.current.value, inputDesc.current.value, walletId, selectedTagId)
            setReloadTransaction(true)
        } else {
            setRequiredField(true)

        }
    }

    return (
        <>
            <center>
                <Grid.Container gap={2}>
                    <Grid ref={parentRef}>
                        <Field type="text" id="1" insertValues={insertValues} undesiredInput="" />
                        <Field type="text" id="2" insertValues={insertValues} undesiredInput="" />
                    </Grid>
                    <Grid>
                        <Input ref={inputDate} type="date" aria-label="date" required></Input>
                    </Grid>
                    <Grid>
                        <Input ref={inputAmount} type="number" aria-label="amount" required></Input>
                    </Grid>
                    <Grid>
                        <Input ref={inputDesc} type="text" aria-label="inputDesc" required></Input>
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
                        <Button onPress={() => { console.log(JSON.stringify(values)) }}></Button>
                    </Grid>
                    <Grid>
                        {requiredField ? (
                            <div>
                                <Text p>All fields are required</Text>
                            </div>
                        ) : (
                            <div>
                            </div>
                        )}
                    </Grid>

                </Grid.Container>
            </center>
        </>
    )
}
