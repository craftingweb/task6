import Container from './Container';
import {NavLink as RouterLink} from 'react-router-dom';

const Header = () => {

    const getClassName = props => {
        return `${props.isActive ? 'font-bold' : ''} hover:underline hover:text-gray-600 transition duration-300 `
    }

    return <Container className="bg-gray-300">
        <nav className="flex gap-4">
            <RouterLink className={getClassName} to="/">Home</RouterLink>
            <RouterLink className={getClassName} to="/about">About</RouterLink>
            <RouterLink className={getClassName} to="/books">Books</RouterLink>
        </nav>
    </Container>
}

export default Header;