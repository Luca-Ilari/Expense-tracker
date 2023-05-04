import { useState, useEffect } from "react";
import { getWallets } from "../lib/apiQuery";
import Wallet from "./Wallet"
import { Text, Grid, Container, Row, Col, Pagination } from "@nextui-org/react";
import { Tabs } from "antd";
import LoadingAnimation from "./LoadingAnimation";
import Title from "./Title";

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

    function renderMain() {
        return (
            <>
                <Container justify="center" fluid responsive>
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
                                <div>
                                    <Tabs
                                        defaultActiveKey="1"
                                        items={userWalletsJson.map((key, value) => (
                                            {
                                                key: value,
                                                label: key.wallet_name,
                                                children: (<Wallet walletId={key.wallet_id} userId={userId} />),
                                                closable: false,
                                            }
                                        ))}
                                    />
                                </div>
                            ) : (
                                <Grid.Container justify="center">
                                    <LoadingAnimation />
                                </Grid.Container>
                            )}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
    return (
        renderMain()
    )
}

export default HomePage