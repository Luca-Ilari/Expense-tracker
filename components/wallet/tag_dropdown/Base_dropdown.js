import { Dropdown } from '@nextui-org/react';
import { Select } from 'antd';
import { useMemo, useState, useEffect } from 'react';

export function BaseDropDown({ defaultText, userTags, setSelectedTagId }) {
    const onChange = (value) => {
        console.log("sss  " + JSON.stringify(userTags));
        setSelectedTagId(value)
    };

    function RenderTags() {
        return (
            <>
                <Select
                    showSearch
                  defaultValue={defaultText}
                    onChange={onChange}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={userTags.map(tag => (
                        {
                            value: tag.tag_id,
                            label: tag.tag_name,
                        }
                    ))}
                />
            </>
        )
    }

    return (
        <>
            <RenderTags />
        </>
    )
}