import { StarFill } from "react-bootstrap-icons"

function Star(props) {
    const rating = props.rating // récupération de la note

    // création du tableau des étoiles
    let stars = [
        "rating__star",
        "rating__star",
        "rating__star",
        "rating__star",
        "rating__star",
    ]

    // ADD class pour étoile noté
    for (let i = 0; i < rating; i++) {
        stars.splice(i, 1, "rating__star rating__star--complete")
    }
    return (
        <div className={`rating`}>
            {stars.map(
                (
                    star,
                    index // mapper les étoiles
                ) => (
                    <StarFill key={`${index}- ${star}`} className={star} />
                )
            )}
        </div>
    )
}

export default Star
