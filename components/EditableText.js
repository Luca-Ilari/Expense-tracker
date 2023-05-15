import { Typography } from 'antd';
import { useState } from 'react';
const { Paragraph } = Typography;

function EditableText({ callback, children, maxLength }) {
    const [editableStr, setEditableStr] = useState(children)
    function changeText(str){
        callback(str);
        setEditableStr(str);
    }
    return (
        <>
            <Paragraph
                style={{
                    margin: 0,
                }}
                editable={{
                    maxLength: maxLength,
                    onChange: changeText,
                }}
            >
                {editableStr}
            </Paragraph>
        </>
    )
}

export default EditableText;