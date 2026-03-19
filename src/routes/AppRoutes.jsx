import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cards from "../pages/Cards";
import CardDetails from "../pages/CardDetails";
import Faction from "../pages/Faction";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/faction/:name" element={<Faction />} />
                <Route path="/card/:name" element={<CardDetails />} />
            </Routes>
        </BrowserRouter>
    )
}