import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Rules from "./components/Rules/Rules";
import Teams from "./components/Teams/Teams";
import Standings from "./components/Standings/Standings";
import Login from "./components/Login/Login";
import Ducati from "./components/Teams/Ducati/Ducati";
import Yamaha from "./components/Teams/Yamaha/Yamaha";
import Ktm from "./components/Teams/Ktm/Ktm";
import Aprilia from "./components/Teams/Aprilia/Aprilia";
import Honda from "./components/Teams/Honda/Honda";


export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes children={
                    <>
                    {/* Navbar Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/standings" element={<Standings />} />
                    <Route path="/login" element={<Login />} />

                    {/* Team Routes */}
                    <Route path="/ducati" element={<Ducati />} />
                    <Route path="/yamaha" element={<Yamaha />} />
                    <Route path="/ktm" element={<Ktm />} />
                    <Route path="/aprilia" element={<Aprilia />} />
                    <Route path="/honda" element={<Honda />} />
                    </>
                }>
                </Routes>
            </BrowserRouter>
        </>
    )
}