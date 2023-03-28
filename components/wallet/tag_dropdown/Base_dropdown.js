import { Dropdown } from '@nextui-org/react';
import { useMemo, useState } from 'react';

export function BaseDropDown({ tagName, userTags, selectedTag }) {
    const [selected, setSelected] = useState("")

    useMemo(() => {
        async function awaitUserTags() {
            selectedTag(new Set([tagName]))
        }
        awaitUserTags()
    }, [])

    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    function RenderTags() {
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
                        onSelectionChange={selectedTag}
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