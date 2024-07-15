import * as React from "react"
import {Label} from "~/components/ui/label";
import {Button} from "~/components/ui/button";
import {cn} from "~/lib/utils";
import {Input} from "~/components/ui/input";
import {LoadingSpinner} from "~/components/ui/spinner";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const loader = () => {
    return null
}

export default function UserAuthForm({className, ...props}: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <LoadingSpinner/>
                        )}
                        Sign In with Email
                    </Button>
                </div>
            </form>
        </div>
    )
}