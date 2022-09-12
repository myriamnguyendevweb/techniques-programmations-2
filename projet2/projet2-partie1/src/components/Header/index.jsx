import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/"> Accueil </Link>
            <Link to="/films">Films</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/starships">Starships</Link>
            <Link to="/vehicles">Vehicles</Link>
        </nav>
    )
}

export default Header