import { useState, useEffect } from "react";
import { getWallets } from "../lib/apiQuery";
import Wallet from "./Wallet"
import { Tabs, Col, Row } from "antd";
import LoadingAnimation from "./LoadingAnimation";
import Title from "./Title";
import EditableText from "./EditableText";
import { asyncChangeWalletName } from "../lib/apiQuery";

function HomePage({ userId }) {
    const [canLoad, setCanLoad] = useState(false)
    const [userWalletsJson, setUserWalletsJson] = useState([])

    useEffect(() => {
        async function awaitGetWallets() {
            setUserWalletsJson(await getWallets(userId))
            setCanLoad(true)
        }
        awaitGetWallets();
    }, []);

    async function updateWalletName(newName, walletId) {
        await asyncChangeWalletName(newName, walletId)
    }

    function renderMain() {
        return (
            <>
                <Row>
                    <Col>
                        {Object.keys(userWalletsJson).length > 1 ? (
                            <Title content="Your wallets" />
                        ) : (
                            <Title content="Your wallet" />
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {canLoad ? (
                            
                                <Tabs
                                    defaultActiveKey="1"
                                    tabPosition="left"
                                    size="small"
                                    items={userWalletsJson.map((key, value) => (
                                        {
                                            key: value,
                                            label: (<EditableText callback={(text) => updateWalletName(text, key.wallet_id)}>{key.wallet_name}</EditableText>),
                                            children: (<Wallet walletId={key.wallet_id} userId={userId} />),
                                            closable: false,
                                        }
                                    ))}
                                />
                            
                        ) : (
                            <LoadingAnimation />

                        )}
                    </Col>
                </Row>
            </>
        )
    }
    return (
        renderMain()
    )
}

export default HomePage