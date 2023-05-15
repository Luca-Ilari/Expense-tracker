import { useState } from 'react';
import { getSession } from 'next-auth/react';
import { asyncChangeWalletName } from '../lib/apiQuery';
import Wallet from '../components/Wallet';
import { Tabs, Col, Row, Skeleton, Avatar } from "antd";
import LoadingAnimation from '../components/LoadingAnimation';
import Title from '../components/Title';
import EditableText from '../components/EditableText';
import { getWallets, getUserId } from '../lib/supabase';

/*  TO-DO
Date format of transaction to dd-mm-yyyy 
glitchy page refresh when transaction is added
Tag name MUST BE DIFFERENT when created
Password encryption
*/

function Index({ data, userId, userWalletsJson }) {
    async function updateWalletName(newName, walletId) {
        await asyncChangeWalletName(newName, walletId)
    }

    function renderIndex() {
        return (
            <>
                <Avatar size={64} src={data.user.image} />
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
        renderIndex()
    )
}

export default Index

export async function getServerSideProps(contex) {
    const session = await getSession(contex)

    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
            props: {}
        }
    } else {

        const userId = await getUserId(session.user.email);
        const userWalletsJson = await getWallets(userId);

        return {
            props: {
                data: session,
                userId: userId,
                userWalletsJson: userWalletsJson,
            }
        }
    }
}