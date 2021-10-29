import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { ViewportProps } from "react-map-gl";

interface MapComponentProps {
  className?: string;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

/*
This component is responsible for rendering the map. This component has to show the map and 
markers bookmarked by users.
*/
const MapComponent = (props: MapComponentProps): JSX.Element => {
  const [markers, setMarkers] = useState<any[]>([]);
  const handleClick = ({ lngLat: [longitude, latitude] }) =>
    setMarkers((markers) => [...markers, { longitude, latitude }]);
  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 14,
  });

  return (
    <div className={props.className}>
      <h3>Map</h3>
      <ReactMapGL
        onClick={handleClick}
        width="50vw"
        height="50vh"
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(nextViewport: ViewportProps) =>
          setViewport(nextViewport)
        }
      >
        {markers.length
          ? markers.map((m, i) => (
              // <Marker /> just places its children at the right lat lng.
              <Marker {...m} key={i}>
                {`📌${m.longitude}, ${m.latitude}`}
              </Marker>
            ))
          : null}
      </ReactMapGL>
    </div>
  );
};

export default MapComponent;
