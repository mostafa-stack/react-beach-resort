import React, { Component } from "react";
import RoomFilter from "./RoomFilter";
import RoomSorted from "./Roomsorted";
import { RoomContext } from "../context";
import Loading from "./Loading";
export default class RoomContainer extends Component {
  static contextType = RoomContext;
  render() {
    const { rooms, sortedRooms, loading } = this.context;
    
      if (loading) {
        return <Loading />;
      }  
      return (
        <div>
          <RoomFilter rooms={rooms} />
          <RoomSorted sortedRooms={sortedRooms} />
        </div>
      );
    
  }
}
