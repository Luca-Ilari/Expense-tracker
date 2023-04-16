import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

import { Text, Table } from '@nextui-org/react';
import EditTransactionTagDropdown from './tag_dropdown/Edit_transaction_tag_dropdown';

export function TrendGraph({ userTransactions }) {
    var summary = 0;
    const data = {
        labels: userTransactions.map(transaction => (transaction.date)),
        datasets: [{
            label: 'Summary',
            lineTension: 0.2,
            data: userTransactions.map(transaction => (
                summary = summary + transaction.amount))
        }],
    };
    const options = {
        plugins: {
            legend: {
                display: true,
            },
        },
        elements: {
            line: {
                tension: 0.1,
                borderWidth: 2,
                borderColor: "rgba(11, 131, 165, 1)",
                fill: "start",
                backgroundColor: "rgba(11,131,165, 0.3)",
            },
        },
    }
    return (
        <Line data={data} options={options} />
    )
}
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
                            <Table.Cell key="tags"><EditTransactionTagDropdown transactionId={transaction.transaction_id} initialTag={transaction.tag_name} initialTagId={transaction.tag_id} userTags={userTags}/></Table.Cell>
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
export function Saldo({ userTransactions }) {
    function sumSaldo() {
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
            weight="bold">Saldo totale {sumSaldo()}€
        </Text>
    )
}