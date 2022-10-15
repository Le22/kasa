import { useState } from "react"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"

function Carrousel(props) {
    const title = props.title // récupération du titre
    const link = props.link // récupération de url des img

    let left // chevron left
    let right // chevron right
    let numberImg // nombre img

    // useState pour changment des img
    const [url, changeUrl] = useState(link[0])

    // SI il y a plus de 1 img -> afficher les flêches
    if (link.length > 1) {
        left = (
            <ChevronLeft
                className="carrousel__icon left"
                onClick={() => beforeImg()}
            />
        )
        right = (
            <ChevronRight
                className="carrousel__icon right"
                onClick={() => nextImg()}
            />
        )
        numberImg = (
            <p className="carrousel__numberimg">
                {link.indexOf(url) + 1}/{link.length}
            </p>
        )
    }

    // Event pour img suivante
    function nextImg() {
        let newLink

        // SI dernière url -> revenir à la première img
        link.indexOf(url) < link.length - 1
            ? (newLink = link[link.indexOf(url) + 1])
            : (newLink = link[0])
        changeUrl(newLink)
    }

    // Event pour img précédente
    function beforeImg() {
        let newLink

        // SI première url -> aller à la dernière img
        link.indexOf(url) > 0
            ? (newLink = link[link.indexOf(url) - 1])
            : (newLink = link[link.length - 1])
        changeUrl(newLink)
    }

    return (
        <>
            <div className="carrousel">
                {left}
                <img className="carrousel__img" src={url} alt={title} />
                {right}
            </div>
            {numberImg}
        </>
    )
}

export default Carrousel
