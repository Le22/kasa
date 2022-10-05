import { Link } from "react-router-dom"

function NoMatch() {
    return (
        <div className="errorPage">
            <div className="errorPage__content">
                <p className="errorPage__content__number">404</p>
                <p className="errorPage__content__text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </div>
            <Link to="/" className="errorPage__link">
                Retourner sur la page d’accueil
            </Link>
        </div>
    )
}

export default NoMatch
