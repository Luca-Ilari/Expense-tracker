import { useState, useEffect } from 'react';
import { Container, Text } from '@nextui-org/react';
import { Col, Row } from 'antd';
import { TransactionsTabel, Balance } from './walletComponents';
import { tryGetTransactions, getUserTags } from "../lib/apiQuery";
import TrendGraph from './trendGraph';
import AddTransactionForm from './addTransactionForm';
import LoadingAnimation from './LoadingAnimation';

function Wallet({ walletId, userId }) {
    const [userTransactions, setUserTransactions] = useState([])
    const [reloadTransaction, setReloadTransaction] = useState(false)
    const [userTags, setUserTags] = useState(undefined)

    class transaction {
        constructor(jsonTransaction) {
            this.transaction_id = Number(jsonTransaction.transaction_id);
            this.date = String(jsonTransaction.date);
            this.amount = Number(jsonTransaction.amount);
            this.description = String(jsonTransaction.description);
            this.wallet_id = Number(jsonTransaction.wallet_id);
            this.tag_id = Number(jsonTransaction.tag_id);
            this.tag_name = String(jsonTransaction.tag_name);
        }
    }

    class userTag {
        constructor(tags) {
            this.tag_id = Number(tags.tag_id);
            this.tag_name = String(tags.tag_name);
        }
    }

    async function populateUserTransactions(transactionsJson) {
        let tempUserTransactions = new Array
        for (const i in transactionsJson) {
            tempUserTransactions.push(new transaction(transactionsJson[i]))
        }
        return tempUserTransactions
    }

    async function populateUserTags(userTagsJson) {
        let tempUserTags = new Array
        for (const i in userTagsJson) {
            tempUserTags.push(new userTag(userTagsJson[i]))
        }
        return tempUserTags
    }

    useEffect(() => {
        async function awaitGetTransactions() {
            const transactionsJson = await tryGetTransactions(walletId);
            setUserTransactions(await populateUserTransactions(transactionsJson))
            setReloadTransaction(false)
        }
        awaitGetTransactions();
    }, [walletId, reloadTransaction]);

    useEffect(() => {
        async function awaitUserGetTags() {
            const userTagsJson = await getUserTags(userId)
            setUserTags(await populateUserTags(userTagsJson))
        }
        awaitUserGetTags()
    }, [])

    function RenderWallet() {
        if (userTags != undefined) {
            return (<>
                <Row>
                    <Col>
                        <Text h2>Your transactions</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <TransactionsTabel userTransactions={userTransactions} userTags={userTags} />
                    </Col>
                    <Col span={12}>
                        <TrendGraph userTransactions={userTransactions} />
                        <center>
                            <Balance userTransactions={userTransactions} />
                        </center>
                    </Col>
                </Row>
                <br />
                <Row justify={"center"}>
                    <Col>
                        <AddTransactionForm setReloadTransaction={setReloadTransaction} walletId={walletId} userTags={userTags} />
                    </Col>
                </Row>
            </>
            )
        } else {
            return (
                <>
                    <LoadingAnimation />
                </>
            )
        }
    }

    return (
        <>
            <RenderWallet />
        </>
    )
}

export default Wallet