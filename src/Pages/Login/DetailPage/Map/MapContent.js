import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContent extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;

    this.state = {
      locationData: [],
      markerPosition: {
        lat: location[0],
        lng: location[1]
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

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    const { markerPosition } = this.state;

    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={markerPosition}
        onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        containerStyle={{ maxWidth: "1090px", height: "400px" }}
      >
        <Marker position={markerPosition} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyARVm_IFPx0fUSRsfdKAvKV9hBG5JWu6xw"
})(MapContent);
