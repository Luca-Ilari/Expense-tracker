import { useRef, useState, useEffect } from 'react';
import { Row, Container, Col, Text, Spacer } from '@nextui-org/react';
import { TrendGraph, Saldo, TransactionsTabel } from './wallet/wallet_components';
import { tryGetTransactions } from "../lib/api_query";
import { deserialize } from 'class-transformer';
import AddTransactionFrom from './wallet/add_transaction_form';

export default function Wallet({ walletId, userId }) {
    const [userTransactions, setUserTransactions] = useState([])
    const [refresh, setRefresh] = useState(false)

    class userTransaction {
        transaction_id = 0;
        date = "00/00/00";
        amount = 0;
        description = "";
        wallet_id = "";
        tag = "";
        tag_name = "";
    }

    useEffect(() => {
        async function awaitGetTransactions() {
            const transactionsJson = await tryGetTransactions(walletId);
            setUserTransactions(deserialize(userTransaction, JSON.stringify(transactionsJson)))
            setRefresh(false)
        }
        awaitGetTransactions();
    }, [walletId, refresh]);


    return (
        <>
            <Container justify="center" fluid responsive>
                <Row responsive>
                    {/* Tablella transazioni */}
                    <Col>
                        <Text h2>Your transactions</Text>
                        <TransactionsTabel userTransactions={userTransactions} userId={userId} />
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
                    <AddTransactionFrom setRefresh={setRefresh} walletId={walletId} userTags={userTags}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}