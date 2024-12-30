import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

const homePage = <HomePage/>;

function App() {
  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Главная</Link>
            </li>
            <li>
              <Link to='/about'>О нас</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />}/>
        </Routes>

      </div>
    </Router>
    </>
  );
}

export default App;
