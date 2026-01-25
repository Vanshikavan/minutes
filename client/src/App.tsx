import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Generator from "./pages/Generator";
import Result from "./pages/Result";
import MyGenerations from "./pages/MyGenerations";
import Gallery from "./pages/Gallery";
import Plans from "./pages/Plans";
import Loading from "./pages/Loading";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/generate" element={<Generator/>} />
                <Route path="/result/:projectId" element={<Result/>} />
                <Route path="/my-generations" element={<MyGenerations />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/loading" element={<Loading />} />
            </Routes>
            <Footer />
        </>
    );
}