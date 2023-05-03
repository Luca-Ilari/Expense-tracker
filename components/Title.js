import { Text } from '@nextui-org/react';

function Title({ content }) {

    return (
        <Text
            h1
            css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold">{content}</Text>
    )
}

export default Title