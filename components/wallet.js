import { useRef, useState, useEffect } from 'react';
import { Row, Container, Col, Text, Spacer } from '@nextui-org/react';
import { TrendGraph, Saldo, TransactionsTabel } from './wallet/wallet_components';
import { tryGetTransactions, getUserTags } from "../lib/api_query";
import { deserialize } from 'class-transformer';
import AddTransactionFrom from './wallet/add_transaction_form';

export default function Wallet({ walletId, userId }) {
    const [userTransactions, setUserTransactions] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [userTags, setUserTags] = useState([])

    class userTransaction {
        transaction_id = 0;
        date = "00/00/00";
        amount = 0;
        description = "";
        wallet_id = "";
        tag = "";
        tag_name = "";
    }

    class userTag{
        tag_id = 0;
        tag_name= "";
    }

    useEffect(() => {
        async function awaitGetTransactions() {
            const transactionsJson = await tryGetTransactions(walletId);
            setUserTransactions(deserialize(userTransaction, JSON.stringify(transactionsJson)))
            setRefresh(false)
        }
        awaitGetTransactions();
    }, [walletId, refresh]);

    useEffect(() => {
        async function awaitUserGetTags() {
            const userTagsJson = await getUserTags(userId)
            setUserTags(deserialize(userTag, JSON.stringify(userTagsJson)))
        }
        awaitUserGetTags()
    }, [])

    return (
        <>
            <Container justify="center" fluid responsive>
                <Row responsive>
                    {/* Tablella transazioni */}
                    <Col>
                        <Text h2>Your transactions</Text>
                        <TransactionsTabel userTransactions={userTransactions} userTags={userTags} />
                    </Col>

                    {/* GRAFICO */}
                    <Col gap={4}>
                        <Spacer y={5} />
                        <TrendGraph userTransactions={userTransactions} />
                        <center>
                            <Saldo userTransactions={userTransactions} />
                        </center>
                    </Col>
                </Row>

                {/* Form per aggiungere campo */}
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}