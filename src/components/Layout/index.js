import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import './index.scss'

const Layout = () =>{
    return(
        <div>
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
}

export default Layout