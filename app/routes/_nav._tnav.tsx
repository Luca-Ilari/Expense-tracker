import {json, Link, Outlet} from "@remix-run/react";
import {Badge, CreditCard, LineChart, LogsIcon, Package, ShoppingCart, Users} from "lucide-react";

export const loader = () => {
    return json({wallets: {id: 1}})
}

const TransactionsNavBar = () => {
    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex-1">
                            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                <Link
                                    to={"transactions"}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <LogsIcon className="h-4 w-4"/>
                                    Transactions
                                </Link>
                                <Link
                                    to={"wallets"}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <CreditCard className="h-4 w-4"/>
                                    Your wallets
                                </Link>
                                <Link
                                    to={"analytics"}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <LineChart className="h-4 w-4"/>
                                    Analytics
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <Outlet/>
            </div>
        </>
    )
}
export default TransactionsNavBar;
