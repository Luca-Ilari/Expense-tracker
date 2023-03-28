import { Spacer, Text } from "@nextui-org/react";
export default function Alert({show, message}){
    function renderAlert() {
        if (show) {
            return(
                <>
                    <div>
                        <Spacer y={0.5}/>
                        <Text h5>
                            { message }
                        </Text>
                    </div>
                </>
            )
        }
        else { return <></> }
    }

    return renderAlert();
}