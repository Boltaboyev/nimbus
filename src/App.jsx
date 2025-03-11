import React from "react"

// components
import Header from "./components/header"
import Footer from "./components/footer"
import Showcase from "./components/showcase"
import Wrap from "./components/wrap"
import Services from "./components/services"
import Team from "./components/team"
import Grid from "./components/grid"
import PriceCard from "./components/price-card"
import TeamSwiper from "./components/team-swiper"
import Comment from "./components/comment"
import Star from "./components/star"

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Showcase />
                <Wrap />
                <Services />
                <Team />
                <Grid />
                <PriceCard />
                <TeamSwiper />
                <Comment />
                {/* <Star /> */}
            </main>
            <Footer />
        </>
    )
}

export default App
