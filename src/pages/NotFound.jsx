import Container from '../components/Container';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (<Container>
        <p>404</p>
        <p>Page Not Found</p>
        <p>Pleae Check Url</p>
        <br/>
        <Link to="/">Back to Home Page</Link>
    </Container>)
}

export default NotFound;