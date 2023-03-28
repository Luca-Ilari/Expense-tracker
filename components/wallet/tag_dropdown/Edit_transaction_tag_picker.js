import { BaseDropDown } from "./Base_dropdown"

export default function EditTransactionTagPicker({ tagName, userTags }) {

    return (
        <BaseDropDown tagName = { tagName } userTags = { userTags } />
    )
}