import { useState } from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import BankLogo from '../../assets/images/logo.svg'


const Header = () =>{
    const [fade, setFade] = useState('has-fade')


    const toggleMenu = ()=>{
        if(fade === 'has-fade' || fade === 'fade-out'){
            setFade('fade-in')
        }else(
            setFade('fade-out') 
        )
    }

    return(
        <div className='header'>
            <div className={`overlay ${fade}`}></div>
            <nav className='flex flex-jc-sb flex-ai-c container container--pall'>
                <Link to='/' className='header__logo'>
                    <img src={BankLogo} alt='EasyBank'/>
                </Link>

                <a id='btnhamburger' onClick={()=>{toggleMenu()}} className='header__mobile-menu hide-for-desktop'>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <div className="header__nav-links hide-for-mobile">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                </div>

                <a className="button hide-for-mobile" href="#">Request Invite</a>
            </nav>

            <div className={`header__dropdown ${fade}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
            </div>
        </div>
    )
}

export default Header