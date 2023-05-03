import { useState, useEffect } from "react";
import { getWallets } from "../lib/apiQuery";
import Wallet from "./Wallet"
import { Text, Grid, Container, Row, Col, Pagination } from "@nextui-org/react";
import LoadingAnimation from "./LoadingAnimation";
import Title from "./Title";

function HomePage({ userId }) {
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
                            {Object.keys(walletsJson).length > 1 ? (
                                <Title content="Your wallets"/>
                            ) : (
                                <Title content="Your wallet"/>
                            )}
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

            </>
        )
    }
    return (
        renderMain()
    )
}

export default HomePage