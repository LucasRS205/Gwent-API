import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cards from "../pages/Cards";
import CardDetails from "../pages/CardDetails";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/card/:name" element={<CardDetails />} />
            </Routes>
        </BrowserRouter>
    )
}