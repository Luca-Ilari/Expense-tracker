import { Loading, Text } from "@nextui-org/react"

export default function LoadingAnimation() {
    return (
        <>
            <Text h2>Loading</Text>
            <Loading size="lg" type="gradient" />
        </>
    )
}