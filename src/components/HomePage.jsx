import {BrowseRouter as Router, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom'

function HomePage() {
    return ( 
        <div>
            <h2>Welcome to the Home Page</h2>
            <Link to={'/about'}>О нас</Link>
        </div>
     );
}

export default HomePage;