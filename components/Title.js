import { Typography } from 'antd';

function Title({ content }) {
    return (
        <Typography.Title
            level={2}
            style={{
                margin: 0,
            }}
        >
            {content}
        </Typography.Title>
    )
}

export default Title