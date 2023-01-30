import ReactMapGL from "react-map-gl";
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from "react";

function App() {
  return (
    <div>
    <Map
      initialViewState={{
        latitude: 53.41667,
        longitude: -1.8,
        zoom: 14
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
    >
      <Marker longitude={-1.8} latitude={53.41667} color="red" />
    </Map>
    </div>
  );
}

export default App;
