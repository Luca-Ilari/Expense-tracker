import { useState, useEffect } from "react";
import { getWallets, asyncChangeWalletName } from "../lib/apiQuery";
import Wallet from "./Wallet";
import { Tabs, Col, Row, Skeleton } from "antd";
import LoadingAnimation from "./LoadingAnimation";
import Title from "./Title";
import EditableText from "./EditableText";

function HomePage({ userId }) {
    const [loading, setLoading] = useState(Boolean(true))

    async function awaitGetWallets() {
        const res = await getWallets(userId)
        
        setLoading(false)
        return res;
    }


    async function updateWalletName(newName, walletId) {
        await asyncChangeWalletName(newName, walletId)
    }
    const dataPromise = awaitGetWallets();

    function renderMain() {
        const userWalletsJson = dataPromise;
        return (
            <>
                <Row justify="space-evenly">
                    <Col>
                        {Object.keys(userWalletsJson).length > 1 ? (
                            <Title content="Your wallets" />
                        ) : (
                            <Title content="Your wallet" />
                        )}
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition="top"
                            style={{
                                height: "100vh",
                            }}
                            items={userWalletsJson.map((key, value) => (
                                {
                                    key: value,
                                    label: (<EditableText callback={(text) => updateWalletName(text, key.wallet_id)} maxLength={20}>{key.wallet_name}</EditableText>),
                                    children: (<Wallet walletId={key.wallet_id} userId={userId} />),
                                    closable: false,
                                }
                            ))}
                        />
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