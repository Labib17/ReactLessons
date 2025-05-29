import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <Link to='/'>
                <h1>React documentation page</h1>
                <h3>Learn React</h3>
            </Link>
        </div>
    );
}

export default Header;