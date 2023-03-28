import { BaseDropDown } from "./Base_dropdown"

export default function EditTransactionTagPicker({ setInputTag, tagName, userTags }) {

    return (
        <BaseDropDown tagName={tagName} userTags={userTags} />
    )
}