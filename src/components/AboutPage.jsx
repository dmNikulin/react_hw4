import {BrowseRouter as Router, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom'

function AboutPage() {
    return ( 
        <div>
            <h2>Welcome to the About Page</h2>
            <Link to={'/home'}>
               Домашняя
            </Link>
        </div>
     );
}

export default AboutPage;