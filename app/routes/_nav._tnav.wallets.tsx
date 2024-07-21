import AddWallet from "~/components/withFetch/addWallet";
import {json} from "@remix-run/react";
import {ActionFunctionArgs} from "@remix-run/node";

export const loader = async () => {
    return null
}

export const action = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData();
    const walletName = formData.get("wallet_name")
    if (formData.has("wallet_name") && walletName) {
        console.log(walletName)
    }
    return json({})
}

const Wallets = () => {
    return (
        <>
            <div>

                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Your wallets
                </h1>
                <AddWallet/>
            </div>
        </>
    )
}
export default Wallets;