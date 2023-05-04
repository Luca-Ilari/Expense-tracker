import { Select } from 'antd';

function BaseDropDown({ defaultText, userTags, setSelectedTagId }) {
    const onChange = (value) => {
        setSelectedTagId(value)
    };

    function RenderTags() {
        return (
            <>
                <Select
                    defaultValue={defaultText}
                    onChange={onChange}
                    options={userTags.map(tag => (
                        {
                            value: tag.tag_id,
                            label: tag.tag_name,
                        }
                    ))}
                    style={{ width: 100 }}
                />
            </>
        )
    }

    return RenderTags();
}

export default BaseDropDown;