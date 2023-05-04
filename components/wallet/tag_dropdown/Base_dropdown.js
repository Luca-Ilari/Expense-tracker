import { Dropdown } from '@nextui-org/react';
import { useMemo, useState, useEffect } from 'react';

export function BaseDropDown({ defaultText, userTags, setSelectedTagId }) {
    const [selected, setSelected] = useState(new Set([defaultText]))
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    )

    useEffect(() => {
        let selectedTag = findSelectedTagId()
        setSelectedTagId(selectedTag)
    }, [selectedValue])
    

    function findSelectedTagId() {
        const tagFound = userTags.find(e => e.tag_name === selectedValue)
        if (tagFound===undefined) {
            return Number(0)
        }else{
            return tagFound.tag_id
        }
    }
    
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
            <RenderTags/>
        </>
    )
}