import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';

const ChangeMapView = ({ lat, lon }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lon) {
      map.flyTo([lat, lon], 10, { duration: 1.5 });
    }
  }, [lat, lon]);

  return null;
};

const MapView = ({ lat, lon, city }) => {
  if (!lat || !lon) return null;

  const position = [lat, lon];

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <ChangeMapView lat={lat} lon={lon} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;