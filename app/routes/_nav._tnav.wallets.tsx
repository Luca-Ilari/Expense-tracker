import AddWallet from "~/components/withFetch/addWallet";

export const loader = () => {
    return null

}
const Wallets = () => {
    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Your wallets
            </h1>
            <AddWallet/>
        </>
    )
}
export default Wallets;