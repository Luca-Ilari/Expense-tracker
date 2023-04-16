import { addTransaction } from "../../lib/api_query";
import { Input, Button, Grid } from "@nextui-org/react";
import { useRef, useState } from "react";
import NewTransactionTagPicker from "./tag_dropdown/New_transaction_tag_picker";

export default function AddTransactionFrom({ setReloadTransaction, walletId, userTags }) {
    const inputDate = useRef(null)
    const inputAmount = useRef(0)
    const inputDesc = useRef("")
    //const [ inputTag, setInputTag ] = useState("")
    const [selectedTag, setSelectedTag] = useState()

    function checkRequired() {
        if (inputDate.current.value === "") {
            return false
        }
        if (inputDate.current.value, inputAmount.current.value, inputDesc.current.value) {
            return true
        } else {
            return false
        }
    }
    function getInput() {
        console.log(inputTag);
        if (checkRequired()) {
            console.log("yes");
            addTransaction(inputDate.current.value, inputAmount.current.value, inputDesc.current.value, walletId, 3)
            setReloadTransaction(true)
        } else {
            console.log("nope");
        }
    }
    return (
        <>
            <center>
                <Grid.Container gap={2}>
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
                       {// <NewTransactionTagPicker selectedTag={selectedTag} tagName={"tag"} userTags={userTags}/>
                       }
                    </Grid>
                    <Grid>
                        <Button onPress={getInput}>Add</Button>
                    </Grid>

                </Grid.Container>
            </center>
        </>
    )
}
