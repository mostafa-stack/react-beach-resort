import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import Options from "./Options";
export default class RoomFilter extends Component {
  static contextType = RoomContext;
  render() {
    const {
      price,
      pets,
      breakfast,
      handleChange,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
    } = this.context;
    const { rooms } = this.props;
    const roomTypeArray = rooms.map((item) => item.type);
    const roomCapacityArray = rooms.map((item) => item.capacity);
    const uniqueRoomTypeArray = ["all", ...new Set(roomTypeArray)];

    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              className="form-control"
              onChange={handleChange}
            >
              {uniqueRoomTypeArray.map((item, index) => (
                <Options key={index} roomType={item} />
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="capacity">guests</label>
            <select
              name="capacity"
              className="form-control"
              onChange={handleChange}
            >
              {[...new Set(roomCapacityArray)].map((item, index) => (
                <Options key={index} roomType={item} />
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">rooms price {price}</label>
            <input
              type="range"
              name="price"
              id="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                className="size-input"
                value={minSize}
                onChange={handleChange}
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                className="size-input"
                value={maxSize}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
