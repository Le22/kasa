import { Link } from "react-router-dom"

function Thumb(props) {
    const id = props.id // récupérer l'id
    const title = props.title // récupérer le titre
    const img = props.img // récupérer l'img

    // ajouter img en background
    const backgroundImgStyle = {
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${img})`,
    }

    return (
        <Link to={id} className="thumb" style={backgroundImgStyle}>
            <p className="thumb__title">{title}</p>
        </Link>
    )
}

export default Thumb
