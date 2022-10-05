import { ChevronDown } from "react-bootstrap-icons"

function DropDown(props) {
    const title = props.title // récupérer le titre du menu déroulant
    const content = props.content // récupérer le contenu du menu déroulant

    // Gérer l'event du menu
    function dropClic(e) {
        // SI header contient class "up" -> changer en "down" SINON "changer en "up"
        e.currentTarget.classList.contains("up")
            ? e.currentTarget.classList.replace("up", "down")
            : e.currentTarget.classList.replace("down", "up")
    }

    return (
        <div className="dropdown">
            <div className="dropdown__header up" onClick={(e) => dropClic(e)}>
                <p className="dropdown__header__title">{title}</p>
                <ChevronDown className="dropdown__header__icon" />
            </div>
            <div className="dropdown__content">
                {
                    // IF content est une liste -> mapper le contenu SINON afficher le contenu
                    Array.isArray(content) ? (
                        content.map((elt, index) => (
                            <p
                                key={`${index} - ${elt}`}
                                className="dropdown__content__text"
                            >
                                {elt}
                            </p>
                        ))
                    ) : (
                        <p className="dropdown__content__text">{content}</p>
                    )
                }
            </div>
        </div>
    )
}

export default DropDown
