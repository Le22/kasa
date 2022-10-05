import { Routes, Route, BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Layout from "./components/Layout"
import APropos from "./pages/APropos"
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import NoMatch from "./pages/NoMatch"

function RoutePage() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<APropos />} />
                    <Route path=":id" element={<Logement />} />
                    <Route path="/404" element={<NoMatch />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </Layout>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutePage
