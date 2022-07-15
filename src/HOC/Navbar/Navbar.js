import { Link } from 'react-router-dom'
import logo from './logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css'

export const Navbar = () => {
    return <>
        <header>
            <section className="header">
                <div className="mail">
                    <Link to='/'>hello@amaranots.com</Link>
                </div>
                <div className='lang'>
                    {/* Languages */}
                </div>
            </section>
            <section className='navbar'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logo} />
                    </Link>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>
                            <Link to='/login'>Մուտք</Link>
                        </li>
                        <li>
                            <button className='signup'>
                                <Link to='/signup'>
                                    Գրանցվել
                                </Link>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='hamburger'>
                    <i className="fas fa-bars"></i>
                </div>
            </section>
        </header>
    </>
}