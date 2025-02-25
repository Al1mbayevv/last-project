import 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h1>Sultonboy's Shop</h1>
                <div className="hrefs">
                    <Link to="/">Shop</Link>
                    <Link to="/about">Contact</Link>
                    <Link to="/trash"><i class="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
