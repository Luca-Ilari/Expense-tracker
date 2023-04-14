import { useState, useEffect } from "react";
import { getWallets } from "../lib/api_query";
import Wallet from "./wallet";
import ConditionalMainTitle from "./main/main_components";
import { Text, Loading, Grid, Container, Row, Col, Pagination} from "@nextui-org/react";

function Main({ userId }) {
    const [canLoad, setCanLoad] = useState(false)
    const [page, setPage] = useState(1)
    const [walletsJson, setWalletsJson] = useState([])

    function changePage(e) {
        console.log(e);
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
                                    <h2>Loading</h2>
                                    <Loading size="lg" type="gradient" />
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

export default Main