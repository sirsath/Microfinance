import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import './report.scss'
import BarChartt from '../../components/chart/BarChartt'
import { Divider } from '@mui/material'

export const Report = () => {
    return (
        <div className="report">
            <Sidebar />
            <div className="reportContainer">
                <Navbar />
                <Chart title="Last 6 Months (Revenue (₹))" aspect={3 / 1} />
                <Divider sx={{ margin: '40px 10px' }} />
                <BarChartt title="Last 6 Months (Leads)" aspect={3 / 1} />
            </div>
        </div>
    )
}
