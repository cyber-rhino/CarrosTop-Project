import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function BRoutes() {
    return(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Catalog />} />
        </Routes>

    </BrowserRouter>
);
}

export default BRoutes;