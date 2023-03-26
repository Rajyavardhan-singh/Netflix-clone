import logo from '../../Assets/navbarlogo.png';
import { Link } from 'react-router-dom';
import Search from './search';
function LoginNavbar() {
    return <div>
        <div className="header">
            <Link to="/"><img className="navLogo" src={logo} alt="" /></Link>
            <Search/>
           
        </div>
    </div>
}

export default LoginNavbar;
