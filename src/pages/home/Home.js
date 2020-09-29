import React from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import { Link } from "react-router-dom";
import Services from "../../components/Services";
import FeaturedRooms from "../../components/FeaturedRooms";
export default function Home() {
  return (
    <div>
      <Hero hero="defaultHero">
        <Banner
          heading="luxurious rooms"
          paragraph="deluxe rooms starts at 299$"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
}
