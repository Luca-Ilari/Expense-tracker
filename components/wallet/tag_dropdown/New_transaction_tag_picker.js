import { BaseDropDown } from "./Base_dropdown"

export default function NewTransactionTagPicker({ setSelectedTagId, tagName, userTags }) {

    return (
        <BaseDropDown
            defaultText={tagName}
            userTags={userTags}
            setSelectedTagId={setSelectedTagId}
        />
    )
}