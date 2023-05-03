import { Text } from '@nextui-org/react';

export default function ConditionalMainTitle({ walletsNumber }) {
    if (walletsNumber > 1) {
        return (
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >Your wallets</Text>
        )
    } else {
        return (
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >Your wallet</Text>
        )
    }
}