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

function TrendGraph({ userTransactions }) {
    var summary = 0;
    const data = {
        labels: userTransactions.map(transaction => (transaction.date)),
        datasets: [{
            label: 'Summary',
            data: userTransactions.map(transaction => (
                summary = summary + transaction.amount)
            ),

        }],
    };
    const options = {
        plugins: {
            tooltip: {
                intersect: false,
                position: 'nearest',
                backgroundColor: 'rgba(0, 0, 0, 0.0)',
            },
            legend: {
                display: true,
            },
        },
        elements: {
            line: {
                spanGaps: true,
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
export default TrendGraph