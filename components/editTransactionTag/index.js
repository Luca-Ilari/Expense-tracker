import { BaseDropDown } from "../TagDropdown"
import { useEffect, useState } from "react"
import { changeTransactionTag } from "../../lib/apiQuery"

function EditTransactionTagDropdown({ transactionId, initialTag, initialTagId, userTags }) {
    const [currentTagId, setCurrentTagId] = useState(initialTagId)
    const [selectedTagId, setSelectedTagId] = useState(currentTagId)

    useEffect(() => {
        if (selectedTagId != currentTagId) {
            changeTransactionTag(transactionId, selectedTagId)
            setCurrentTagId(selectedTagId)
            console.log("setting tag to " + selectedTagId + " transaction id " + transactionId);
        }
    }, [selectedTagId])
        
    return (
        <BaseDropDown defaultText={initialTag} userTags={userTags} setSelectedTagId={setSelectedTagId} />
    )
}
export default EditTransactionTagDropdown