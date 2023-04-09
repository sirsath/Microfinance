import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.scss'

const BarChartt = ({ title, aspect }) => {

    const data = [
        {
            month: 'January',
            Active: 4000,
            Booked: 2400,
            Pending: 400,
        },
        {
            month: 'February',
            Active: 3000,
            Booked: 1398,
            Pending: 210,
        },
        {
            month: 'March',
            Active: 4800,
            Booked: 2800,
            Pending: 290,
        },
        {
            month: 'April',
            Active: 3780,
            Booked: 2908,
            Pending: 400,
        },
        {
            month: 'May',
            Active: 3890,
            Booked: 2800,
            Pending: 181,
        },
        {
            month: 'June',
            Active: 3390,
            Booked: 1800,
            Pending: 500,
        },
    ];
    return (
        <div style={{ margin: '30px 0px' }} className='chart'>
            <h3 className='title'>{title}</h3>
            <ResponsiveContainer width="95%" aspect={aspect}>
                <BarChart
                    width={300}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid className="chartGrid" strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Active" fill="#8884d8" />
                    <Bar dataKey="Booked" fill="#82ca9d" />
                    <Bar dataKey="Pending" fill="#82ca4d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChartt;

