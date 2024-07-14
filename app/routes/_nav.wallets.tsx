import {json} from "@remix-run/react";

export const loader = () => {
    return json({wallets: {id: 1}})
}

const Wallets = () => {
    return (<>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">

            Your Wallets
        </h1>
    </>)
}
export default Wallets