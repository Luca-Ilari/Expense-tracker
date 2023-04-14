import { BaseDropDown } from "./Base_dropdown"

export default function NewTransactionTagPicker({ setInputTag, tagName, userTags }) {
    
    return (
        <BaseDropDown defaultText={tagName} userTags={userTags} />
    )
}