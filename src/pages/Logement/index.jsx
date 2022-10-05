import logementData from "../../utils/data/logements.json"

import Carrousel from "../../components/Carrousel"
import Tag from "../../components/Tag"

import { Navigate, useParams } from "react-router-dom"
import Star from "../../components/Star"
import DropDown from "../../components/DropDown"

function Logement() {
    const { id } = useParams() // récupération de l'id passer dasn l'url
    var logementInfo // création de la variable pour le infos du logement

    // chercher les infos du logement en fonction de l'id
    logementData.forEach((logement) => {
        if (logement.id === id) {
            logementInfo = logement
            return logementInfo
        }
    })
    // SI aucun id ne correspond -> rediriger vers page 404
    if (!logementInfo) {
        return <Navigate to="/404" replace />
    }

    // spliter name pour séparer firstName et lastName
    const authorName = logementInfo.host.name.split(" ")

    return (
        <main className="logement">
            <Carrousel
                link={logementInfo.pictures}
                title={logementInfo.title}
            />
            <div className="logement__presentation">
                <div className="logement__presentation__content">
                    <p className="logement__presentation__content__title">
                        {logementInfo.title}
                    </p>
                    <p className="logement__presentation__content__place">
                        {logementInfo.location}
                    </p>
                    <div className="logement__presentation__content__tags">
                        {logementInfo.tags.map(
                            (
                                tag,
                                index // mapper les tags
                            ) => (
                                <Tag key={`${index} - ${tag}`} value={tag} />
                            )
                        )}
                    </div>
                </div>
                <div className="logement__presentation__aside">
                    <div className="logement__presentation__aside__host">
                        <p className="logement__presentation__aside__host__name">
                            {authorName[0]}
                            <br />
                            {authorName[1]}
                        </p>
                        <img
                            className="logement__presentation__aside__host__img"
                            src={logementInfo.host.picture}
                            alt={logementInfo.host.name}
                            width={64}
                        />
                    </div>
                    <Star rating={logementInfo.rating} />
                </div>
            </div>
            <div className="logement__more">
                <DropDown
                    title="Description"
                    content={logementInfo.description}
                />
                <DropDown
                    title="Équipements"
                    content={logementInfo.equipments}
                />
            </div>
        </main>
    )
}

export default Logement
