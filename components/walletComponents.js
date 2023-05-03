import { Text, Table } from '@nextui-org/react';
import EditTransactionTagDropdown from './editTransactionTag';


export function TransactionsTabel({ userTransactions, userTags }) {
    return (
        <>
            <Table
                bordered
                shadow={false}
                color="secondary"
                aria-label="Transactions"
                css={{

                }}>
                <Table.Header>
                    <Table.Column scope="col">Amount</Table.Column>
                    <Table.Column scope="col">Date</Table.Column>
                    <Table.Column scope="col">Description</Table.Column>
                    <Table.Column scope="col">Tag</Table.Column>
                </Table.Header>
                <Table.Body>
                    {userTransactions.map(transaction => (
                        <Table.Row key={transaction.transaction_id}>
                            <Table.Cell key="amount">{transaction.amount}</Table.Cell>
                            <Table.Cell key="date">{transaction.date}</Table.Cell>
                            <Table.Cell key="description">{transaction.description}</Table.Cell>
                            <Table.Cell key="tags"><EditTransactionTagDropdown transactionId={transaction.transaction_id} initialTag={transaction.tag_name} initialTagId={transaction.tag_id} userTags={userTags} /></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
                <Table.Pagination
                    align="center"
                    rowsPerPage={6}
                    onPageChange={(page) => console.log({ page })}
                >
                </Table.Pagination>
            </Table>
        </>
    )
}
export function Balance({ userTransactions }) {
    function sumBalance() {
        var x = 0
        userTransactions.map(transaction => (x = x + transaction.amount))
        return x
    }
    return (
        <Text
            h2
            css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold">Balance {sumBalance()}€
        </Text>
    )
}