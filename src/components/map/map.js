import React, { Component } from 'react';
import MarkersOnMap from 'markers-on-map-react';

// Any component you need to use
class EventMap extends Component {


  // Any lifecycle method you need to use
  componentDidMount() {
    const lat=this.props.lat;
    const lng=this.props.lng;
    // Basic initialize
    MarkersOnMap.Init({
      mapWidth: '100%',
      mapHeight: '500px',
      mapBackgroundColor: '#f8f8f8',
      mapCenterLat: lat,
      mapCenterLong: lng,
      mapMinZoom: 2,
      mapZoomLevel: 12,
      mapMaxZoom: 15,
      googleApiKey: "AIzaSyBTOLA6Homuc7zsVibRBxeKlGcZO3IZF7o", // required => Google Maps JavaScript API Key (in string format)

      markerObjects: [
        // at least one object required
        {
          markerLat: lat, // marker latitude as number
          markerLong: lng, // marker longitude as number
        },
      ],
    });

    // Select map element (ID or Class)
    MarkersOnMap.Run('div#GoogleMap');

  }

  render() {

    return (

      // Map element
      <div id="GoogleMap"></div>

    );

  }

}

export default EventMap;
