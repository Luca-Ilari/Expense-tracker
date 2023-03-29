import { BaseDropDown } from "./Base_dropdown"
import { useEffect, useState } from "react"

export default function EditTransactionTagPicker({ transactionId, initialTag, userTags }) {
    const [selectedTag, setSelectedTag] = useState(initialTag)

    useEffect(() => {
        async function updateTransctionTag() {
            
        }

        if (selectedTag != initialTag) {
            updateTransctionTag()
            console.log("setting tag to " + selectedTag + " transaction id " + transactionId);
        }
    }, [selectedTag])
    

    return (
        <BaseDropDown defaultText={initialTag} userTags={userTags} setSelectedTag={setSelectedTag} />
    )
}