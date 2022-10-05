import logementData from "../../utils/data/logements.json"
import Thumb from "../../components/Thumb/index"

function Home() {
    const logements = logementData // récupérer la liste des logements

    return (
        <main className="home">
            <section className="home__presentation">
                <h1 className="home__presentation__slogan">
                    Chez vous, partout et ailleurs
                </h1>
            </section>
            <section className="home__gallery">
                {logements.map(
                    (
                        logement // mapper les logements dans des cartes
                    ) => (
                        <Thumb
                            key={logement.id}
                            id={logement.id}
                            title={logement.title}
                            img={logement.cover}
                        />
                    )
                )}
            </section>
        </main>
    )
}

export default Home
