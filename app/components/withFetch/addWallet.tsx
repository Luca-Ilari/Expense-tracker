import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";

const AddWallet = () => {
    return (
        <>
        <p>Add new wallet</p>
            <form method="POST">
                <Input type="text" name="wallet_name"/>
                <Button type="submit"/>
            </form>
        </>
    )
}
export default AddWallet;