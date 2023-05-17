import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import News from "../NewsSection/News";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <News />
            <Footer />
        </div>
        
    )
}