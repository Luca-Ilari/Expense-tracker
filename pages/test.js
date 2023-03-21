import { addTransaction } from "../lib/api_query"
import { Mail } from "../components/login/mail"
import { Input } from "@nextui-org/react"
export default function Test(){
    function test(){
        
        addTransaction("2023-03-14",-45,"test22222222",1,2)
    }
    return(
        <>
        <button onClick={test}>asdasd</button>
        <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
        </>
    )
}