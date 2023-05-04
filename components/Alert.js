import { Spacer, Text } from "@nextui-org/react";
import { Alert } from "antd";

function Warning({ show, message }) {
    function renderAlert() {
        if (show) {
            return (
                <Alert message={message} type="warning" showIcon closable />
            )
        }
        else { return <></> }
    }

    return renderAlert();
}
export default Warning