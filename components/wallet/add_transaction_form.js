import { addTransaction } from "../../lib/api_query";
import { Input, Button, Grid } from "@nextui-org/react";
import { useRef, useState } from "react";
import { BaseDropDown } from "./tag_dropdown/Base_dropdown";

export default function AddTransactionFrom({ setReloadTransaction, walletId, userTags }) {
    const inputDate = useRef(null)
    const inputAmount = useRef(0)
    const inputDesc = useRef("")
    //const [ inputTag, setInputTag ] = useState("")
    const [selectedTagId, setSelectedTagId] = useState()

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
        if (checkRequired()) {
            console.log("yes");
            addTransaction(inputDate.current.value, inputAmount.current.value, inputDesc.current.value, walletId, selectedTagId)
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
                        <BaseDropDown
                            defaultText={""}
                            userTags={userTags}
                            setSelectedTagId={setSelectedTagId}
                        />
                    </Grid>
                    <Grid>
                        <Button onPress={getInput}>Add</Button>
                    </Grid>

                </Grid.Container>
            </center>
        </>
    )
}
