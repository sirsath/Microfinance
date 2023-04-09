import './promotion.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import PromotionsTable from './PromotionsTable'

export const Promotion = () => {

    return (
        <div className='promotion'>
            <Sidebar />
            <div className="promotionContainer">
                <Navbar />
                <PromotionsTable />
            </div>
        </div>
    )
}
