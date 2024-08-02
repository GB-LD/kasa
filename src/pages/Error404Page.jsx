import { NavLink } from "react-router-dom"


function Error404Page () {
  return (
    <div className="wrapper-error">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/" className="homepage-link">Retourner sur la page d’accueil</NavLink>
    </div>
  )
}

export default Error404Page