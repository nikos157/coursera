import logo from './icons_assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import "../App.css";
function Footer() {
    return (
        <footer>
            <a href="#"><img src={logo} alt="logo" /></a>
            <ul>
                <li><a href='#'><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faTwitter} /></a></li>
            </ul>
            <p>&copy;2023 little lemon</p>
        </footer>
    )
}
export default Footer