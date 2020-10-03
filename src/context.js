import React, { Component } from "react";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    selectedRoom: {},
    type: "all",
    capacity: 1,
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    minSize: 0,
    maxSize: 0,
    pets: false,
    breakfast: false,
  };
  getData = async () => {
    const contentful = require("contentful");
    const client = contentful.createClient({
      space: process.env.REACT_APP_API_SPACE,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    });

    try {
      let response = await client.getEntries({
        content_type: "beachResort",
        order: "fields.capacity",
      });
      let rooms = this.formatData(response.items);
      let featured = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));
      this.setState({
        rooms: rooms,
        featuredRooms: featured,
        sortedRooms: rooms,
        loading: false,
        maxPrice,
        maxSize,
        price: maxPrice,
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
  }
  formatData(items) {
    const tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      let room = { ...item.fields, id, images };
      return room;
    });
    return tempItems;
  }
  handleChange = (event) => {
    let name = event.target.name;
    let value;
    
      event.target.type === "checkbox"
        ? (value = event.target.checked)
        : (value = event.target.value);
    
    if (name === "capacity" || name === "maxSize" || name === "minSize") {
      value = parseInt(event.target.value);
    }
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    const {
      type,
      capacity,
      price,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
      rooms,
    } = this.state;
    let filterRooms = rooms;
    if (type !== "all") {
      filterRooms = filterRooms.filter((room) => room.type === type);
    }
    if (capacity > 1) {
      filterRooms = filterRooms.filter((room) => room.capacity >= capacity);
    }
    if (price < maxPrice) {
      filterRooms = filterRooms.filter((room) => room.price <= price);
    }
      filterRooms = filterRooms.filter(
        (room) => room.size >= minSize && room.size <= maxSize
      );
    if (breakfast) {
      filterRooms = filterRooms.filter((room) => room.breakfast === breakfast);
    }
    if (pets) {
      filterRooms = filterRooms.filter((room) => room.pets === pets);
    }
    this.setState({
      sortedRooms: filterRooms,
    });
  };
  getRoom = (slug) => {
    const mentionedRoom = this.state.rooms.find((room) => room.slug === slug);
    this.setState({
      selectedRoom: mentionedRoom,
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomContext, RoomProvider, RoomConsumer };
