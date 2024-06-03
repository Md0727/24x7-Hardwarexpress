import React, { useState } from "react";
import { LayoutContainerMain } from '../../../component/LayoutContainer/LayoutContainerMain'
import { Marquee } from "../../../component/Marquee/Marquee";
import { CardList } from "./components/CardList";
import Accordion from "../../../page_component/Accordion/Accordion";
import BannerSlider from "./components/BannerSlider";
import { Link } from "react-router-dom";
import { Recent_View } from "../Furniture_Pages/Furniture_Home/Compoents/Recent_View";

export const Home = () => {
  let statusCode = JSON.parse(localStorage.getItem("validated"))

  return (
    <>
      <LayoutContainerMain>
        {
          (statusCode === 2) && (
            <div class="bg-orange-100 fixed bottom-0 w-full z-20 border-l-4 mb-0 border-orange-500 text-orange-700 p-4" role="alert">
              <p class="font-bold">Oops!</p>
              <p>Sorry, your session has expired. Please log in again to continue using the application. <Link className='underline' to={"/login"}>Go to Login</Link></p>
            </div>
          )
        }
        {/* ============ top banner component ============ */}
        <BannerSlider />

        {/* ============ search app component ============ */}
        {/* <SearchApp /> */}

        {/* ============== Resent view section html =============== */}
        <Recent_View />

        {/* ============ marquee section part =========== */}
        {/* <Marquee /> */}

        {/* ============ Abouts section part =========== */}
        {/* <Abouts /> */}
        {/* ============ BuyAndSell section part =========== */}
        {/* <BuyAndSell /> */}

        {/* ============ WantToBuy section part =========== */}
        {/* <WantToBuy /> */}

        {/* ============ CardList section part =========== */}
        <CardList />

        {/* ============ DealSlider 01 section part =========== */}
        {/* <DealSlider /> */}

        {/* ============ Our Clients section part =========== */}
        <Accordion />
      </LayoutContainerMain>
    </>
  )
}
