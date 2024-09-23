import '@fortawesome/fontawesome-free/css/all.min.css'
import './header.css'
import { useState } from 'react'

export function Header() {

    const [menuOpen, setMenu] = useState(false)

    const menuToggle = () => {
        setMenu(!menuOpen)
    }

    return (
        <>
            <header>
                <nav className='navbar'>
                    <i className="fas fa-hamburger" id='nav_icon'> Foodflow</i>
                    <ul className='nav_list'>
                        <li className='nav_item'>
                            <a href="#home">Início</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#doadores">Doadores</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#feedbacks">Feedbacks</a>
                        </li>
                    </ul>

                    <button className='btn_default'>
                        Peça aqui
                    </button>

                    <button className='mobile_btn' onClick={menuToggle}>
                        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </button>

                </nav>

                <div className={`mobile_menu ${menuOpen ? 'active' : ''}`}>
                <ul className='mobile_nav_list'>
                        <li>
                            <a href="#home" className='mobile_nav_item'>Início</a>
                        </li>
                        <li>
                            <a href="#doadores" className='mobile_nav_item'>Doadores</a>
                        </li>
                        <li>
                            <a href="#feedbacks" className='mobile_nav_item'>Feedbacks</a>
                        </li>
                    </ul>

                    <button className='btn_default'>
                        Peça aqui
                    </button>
                </div>
            </header>

        </>
    )

}