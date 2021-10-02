import React from 'react'
import {GoogleMap, MapFrame} from "./Map.element"

const Map = () => {
    return (
        <GoogleMap>
            <MapFrame
              title="map"
              src="https://www.google.com/maps/embed/v1/search?q=+local+government+scheme+iwo&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              
              
              >
            </MapFrame>
            
        </GoogleMap>
    )
}


export default Map
