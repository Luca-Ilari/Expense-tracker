import { useState, useEffect } from 'react';
import { Row, Container, Col, Text, Spacer } from '@nextui-org/react';
import { TrendGraph, Saldo, TransactionsTabel } from './wallet/wallet_components';
import { tryGetTransactions, getUserTags } from "../lib/api_query";
import { deserialize } from 'class-transformer';
import AddTransactionFrom from './wallet/add_transaction_form';

export default function Wallet({ walletId, userId }) {
    const [userTransactions, setUserTransactions] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [userTags, setUserTags] = useState(undefined)
    
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
        constructor(tags) {
            this.tag_id = Number(tags.tag_id);
            this.tag_name = String(tags.tag_name);
        }
        getTagId(){
            console.log(this.tag_id);
            return this.tag_id;
        }
    }

    async function populateUserTags(userTagsJson){         
        let tempUserTags = new Array      
        for (const i in userTagsJson) {
            tempUserTags.push(new userTag(userTagsJson[i]))
        }
        return tempUserTags
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
            setUserTags(await populateUserTags(userTagsJson))
        }
        awaitUserGetTags()
    }, [])

    function RenderWallet(){
        if(userTags!=undefined){
            return(
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
                            <AddTransactionFrom setRefresh={setRefresh} walletId={walletId} userTags={userTags}/>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        }else{
            return(<><Text h2>Loading ...</Text></>)
        }
    }

    return (
        <>
            <RenderWallet />
        </>
    )
}