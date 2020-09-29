import React, { Component } from "react";
import Banner from "../../../components/Banner";
import { Link } from "react-router-dom";
import defaultImg from "../../../images/room-1.jpeg";
import { RoomContext } from "../../../context";
import Background from "../../../components/StyleHero";
class SingleRoom extends Component {
  static contextType = RoomContext;
  render() {
    const { selectedRoom } = this.context;
    const {
      name,
      description,
      capacity,
      pets,
      breakfast,
      extras,
      price,
      images,
      size,
    } = selectedRoom;
    return !selectedRoom.slug ? (
      <div className="error">
        <h3>no such room could be found</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    ) : (
      <>
        <Background img={images[0] || defaultImg}>
          <Banner heading={selectedRoom.name}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </Background>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h6>description</h6>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : {price}$</h6>
              <h6>size : {size} sqft</h6>
              <h6>
                max-capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>pets : {pets ? "pets allowed" : "no pets allowed"} </h6>
              <h6>{breakfast ? "free breakfast included" : null} </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
