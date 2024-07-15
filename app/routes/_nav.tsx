import {Link, Outlet} from "@remix-run/react";
import {CircleUser, Menu, TrendingUp} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {Sheet, SheetContent, SheetTrigger} from "~/components/ui/sheet"
import {Button} from "~/components/ui/button"

const NavBar = () => {
    return (
        <>
            <div className="flex min-h-screen w-full flex-col">
                <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                    <nav
                        className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                        <Link
                            to={"/"}
                            className="flex items-center gap-2 text-lg font-semibold md:text-base"
                        >
                            <TrendingUp className="h-6 w-6"/>
                            <span className="sr-only">Home</span>
                        </Link>
                        <Link
                            to={"/"}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to={"/transactions"}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Transactions
                        </Link>
                        <Link
                            to={"/settings"}
                            className="text-foreground transition-colors hover:text-foreground"
                        >
                            Settings
                        </Link>
                    </nav>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5"/>
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    to={"/"}
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <TrendingUp className="h-6 w-6"/>
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    to={"/"}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to={"/transactions"}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Transactions
                                </Link>
                                <Link className="hover:text-foreground" to={"/settings"}>
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                        <div className="ml-auto flex-1 sm:flex-initial">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="secondary" size="icon" className="rounded-full">
                                        <CircleUser className="h-5 w-5"/>
                                        <span className="sr-only">Toggle user menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}
export default NavBar;