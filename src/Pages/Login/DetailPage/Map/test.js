import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { API } from "../../../../config";
import "./MapContent.scss";
export class MapContent extends Component {
  constructor() {
    super();
    this.state = {
      locationData: [],
      markerPosition: {
        lat: 0,
        lng: 0
      }
    };
  }
  renderMarkers = (map, maps) => {
    const { markerPosition } = this.state;
    let marker = new maps.Marker({
      position: markerPosition,
      map
    });
    return marker;
  };
  componentDidMount() {
    const { id } = this.props;
    fetch(`${API}/main/picks/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => ({
          markerPosition: {
            ...prevState.markerPosition,
            lat: Number(res.picks_detail[0]?.latitude),
            lng: Number(res.picks_detail[0]?.longitude)
          }
        }));
      });
  }
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    const { markerPosition } = this.state;
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        center={markerPosition}
        onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        containerStyle={{ maxWidth: "1090px", height: "500px" }}
      >
        <Marker position={markerPosition} />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAY0YOFJf78OggXYeI6_fe9uiDQ7e_GZjM"
})(MapContent);
