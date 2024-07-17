import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo-kasa.svg"

const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo de kasa" />
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
        </nav>
    </header>
  )
}

export default Header