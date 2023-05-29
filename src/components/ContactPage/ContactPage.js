import './ContactPage.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'


function ContactPage(props) {
  const [clickedLatLng, setClickedLatLng] = useState({lat: 50.203360237954996, lng: 19.206428186368925});
  
  const MyComponent = () => {
    return null;
  }

  return (
    <div className='ContactPage'>
        <div className='Aside'>
          <h1>Kontakt</h1>
          <p>Adres: Promienna 65, 43-603 Jaworzno</p>
        </div>
        <MapContainer center={[50.203360237954996, 19.206428186368925]} zoom={16} className="map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MyComponent />
          {clickedLatLng && (
            <Marker position={clickedLatLng} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
              <Popup>
                CKZIU Jaworzno {clickedLatLng.lat.toFixed(4)}, {clickedLatLng.lng.toFixed(4)}
              </Popup>
            </Marker>
          )}
        </MapContainer>
    </div>
  );
}

export default ContactPage;
