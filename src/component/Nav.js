import { Link } from "react-router-dom";
import Main from "./Main";
function Nav() {
    return (
        <>
        <nav>
            <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/BookingPage">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">login</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Nav