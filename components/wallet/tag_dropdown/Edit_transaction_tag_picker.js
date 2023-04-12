import { BaseDropDown } from "./Base_dropdown"
import { useEffect, useState } from "react"
import { dbUpdateTransctionTag } from "../../../lib/api_query"

export default function EditTransactionTagPicker({ transactionId, initialTag, initialTagId, userTags }) {
    const [selectedTagId, setSelectedTagId] = useState(initialTag)

    useEffect(() => {
        async function updateTransctionTag() {
            dbUpdateTransctionTag()
        }

        if (selectedTagId != initialTagId) {
            updateTransctionTag()
            console.log("userTags" + JSON.stringify(userTags));
            console.log("setting tag to " + selectedTagId + " transaction id " + transactionId);
        }
    }, [selectedTagId])
    
    return (
        <BaseDropDown defaultText={initialTag} userTags={userTags} setSelectedTagId={setSelectedTagId} />
    )
}