import { Dropdown } from '@nextui-org/react';
import { useMemo, useState } from 'react';

export function BaseDropDown({ defaultText, userTags, setSelectedTag }) {
    const [selected, setSelected] = useState(new Set([defaultText]));
    
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    function RenderTags() {
        setSelectedTag(selectedValue)
        return (
            <>
                <Dropdown>
                    <Dropdown.Button light css={{ tt: "capitalize" }}>
                        {selectedValue}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Tag selection"
                        color="secondary"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selected}
                        onSelectionChange={setSelected}
                    >
                        {userTags.map(tag => (
                            <Dropdown.Item key={tag.tag_name}>{tag.tag_name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </>
        )
    }
    return (
        <>
            <RenderTags />
        </>
    )
}