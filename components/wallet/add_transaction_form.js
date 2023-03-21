import { addTransaction } from "../../lib/api_query";
import { Text, Input, Button, Grid } from "@nextui-org/react";
import { useRef } from "react";

export default function AddTransactionFrom({ setRefresh, walletId, userTags }) {
    const inputDate = useRef(null)
    const inputAmount = useRef(0)
    const inputDesc = useRef("")

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
            addTransaction(inputDate.current.value, inputAmount.current.value, inputDesc.current.value, walletId, 3)
            setRefresh(true)
        } else {
            console.log("nope");
        }
    }
    return (
        <>
            <center>
                <Grid.Container gap={2}>
                    <Grid>
                        <Input ref={inputDate} type="date" id="date" required></Input>
                    </Grid>
                    <Grid>
                        <Input ref={inputAmount} type="number" id="amount" required></Input>
                    </Grid>
                    <Grid>
                        <Input ref={inputDesc} type="texr" id="text" required></Input>
                    </Grid>
                    <Grid>
                        <Dropdown>
                            <Dropdown.Button light css={{ tt: "capitalize" }}>
                                {selectedValue}
                            </Dropdown.Button>
                            <Dropdown.Menu
                                aria-label="Tag selection"
                                color="secondary"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selected}
                                onSelectionChange={setSelected}
                            >
                                {userTags.map(tag => (
                                    <Dropdown.Item key={tag.tag_name}>{tag.tag_name}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid>
                    <Grid>
                        <Button onPress={getInput}>Add</Button>
                    </Grid>

                </Grid.Container>
            </center>
        </>
    )
}
