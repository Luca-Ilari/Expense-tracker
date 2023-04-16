import { BaseDropDown } from "./Base_dropdown"
import { useEffect, useState } from "react"
import { changeTransactionTag } from "../../../lib/api_query"

export default function EditTransactionTagDropdown({ transactionId, initialTag, initialTagId, userTags }) {
    const [selectedTagId, setSelectedTagId] = useState(initialTagId)

    useEffect(() => {
        if (selectedTagId != initialTagId) {
            changeTransactionTag(transactionId, selectedTagId)
            initialTagId = selectedTagId
            console.log("setting tag to " + selectedTagId + " transaction id " + transactionId);
        }
    }, [selectedTagId])
        
    return (
        <BaseDropDown defaultText={initialTag} userTags={userTags} setSelectedTagId={setSelectedTagId} />
    )
}