import { Typography } from 'antd';
const { Paragraph } = Typography;

function EditableText({ callback, children }) {
    return (
        <>
            <Paragraph
                style={{
                    margin: 0,
                }}
                editable={{
                    maxLength: 20,
                    onChange: callback,
                }}
            >
                {children}
            </Paragraph>
        </>
    )
}

export default EditableText;