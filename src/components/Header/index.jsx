import { Link, useLocation } from "react-router-dom"

function Header() {
    const { pathname } = useLocation() // récupérer l'url
    let currentHome = ""
    let currentAPropos = ""

    // SI page Home -> souligner Link Accueil OU SI page a-propos -> souligner Link A Propos
    if (pathname === "/") {
        currentHome = "currentHome"
    } else if (pathname === "/a-propos") {
        currentAPropos = "currentAPropos"
    }

    return (
        <header className="header">
            <Link to="/">
                <img
                    className="header__img"
                    src="./media/logo.png"
                    alt="Logo de Kasa"
                    height={68}
                />
            </Link>
            <nav className="header__nav">
                <Link to="/" className={`header__nav__link ${currentHome}`}>
                    Accueil
                </Link>
                <Link
                    to="/a-propos"
                    className={`header__nav__link ${currentAPropos}`}
                >
                    A Propos
                </Link>
            </nav>
        </header>
    )
}

export default Header
