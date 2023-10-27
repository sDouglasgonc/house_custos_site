import React from "react";
import Banner from "../layout_Home/Banner";
import "./Home.css"
import ImgSlide from "../layout_Home/ImgSlide";
import Integrantes from "../layout_Home/Integrantes";
function Home() {
    return (


        <div className="home_main">
            <Banner />
            <ImgSlide />
            <Integrantes />
        </div>

    )
}
export default Home