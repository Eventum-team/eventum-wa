import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './index.css';


const Marker = (props: any) => {
    const { color, name, id } = props;
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };

class EventMap extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBTOLA6Homuc7zsVibRBxeKlGcZO3IZF7o" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          name="E"
          color="blue"
        />
        </GoogleMapReact>
      </div>
    );
  }
}


export default EventMap;
