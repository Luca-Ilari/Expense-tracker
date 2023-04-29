import { useState, useEffect } from "react";
import { getWallets } from "../lib/api_query";
import Wallet from "./wallet";
import ConditionalMainTitle from "./main/main_components";
import { Menu } from "antd";
import { Text, Loading, Grid, Container, Row, Col, Pagination } from "@nextui-org/react";
import LoadingAnimation from "./general/loading_animation";

function Main({ userId }) {
    const [canLoad, setCanLoad] = useState(false)
    const [page, setPage] = useState(1)
    const [walletsJson, setWalletsJson] = useState([])

    function changePage(e) {
        setPage(e)
    }

    useEffect(() => {
        async function awaitGetWallets() {
            setWalletsJson(await getWallets(userId))
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
                            {
                                <ConditionalMainTitle walletsNumber={Object.keys(walletsJson).length} />
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {canLoad ? (
                                <div>
                                    <Pagination
                                        total={walletsJson.length}
                                        initialPage={1}
                                        page={page}
                                        onChange={changePage}
                                    />
                                    <Text h4 justify="center">{walletsJson[page - 1].wallet_name}</Text>
                                    <Wallet walletId={walletsJson[page - 1].wallet_id} userId={userId} />
                                </div>
                            ) : (
                                <Grid.Container justify="center">
                                    <LoadingAnimation />
                                </Grid.Container>
                            )}
                        </Col>
                    </Row>
                </Container>
                <Menu
                    theme={theme}
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[current]}
                    mode="inline"
                    items={items}
                />
            </>
        )
    }
    return (
        renderMain()
    )
}

export default Main