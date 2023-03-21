import { Text } from '@nextui-org/react';

export function MainTitle({ text }) {
    return (
        <Text
            h1
            size={60}
            css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
        >{text}</Text>
    )
}