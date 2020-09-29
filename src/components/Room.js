import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { RoomContext } from "../context";
export default class Room extends Component {
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const { room } = this.props;
    const { name, images, slug, price } = room;

    return (
      <article className="room">
        <div className="img-container">
          <img src={images[0]} alt="" />
          <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div>
          <Link
            to={`/rooms/${slug}`}
            className="btn-primary room-link"
            onClick={() => getRoom(slug)}
          >
            features
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    );
    Room.propTypes = {
      room: propTypes.shape({
        name: propTypes.string.isRequired,
        slug: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        images: propTypes.arrayOf(propTypes.string).isRequired,
      }),
    };
  }
}
