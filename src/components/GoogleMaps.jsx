import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMapComponent = () => {
 const mapRef = useRef(null);
 const [map, setMap] = useState(null);

 useEffect(() => {
  const loader = new Loader({
   apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
   version: 'beta',
   libraries: ['maps', 'marker'],
  });

  loader.load().then(() => {
   if (mapRef.current) {
    const mapInstance = new window.google.maps.Map(mapRef.current, {
     center: { lat: 49.121883392333984, lng: -122.66516876220703 },
     zoom: 16,
     mapId: 'DEMO_MAP_ID',
    });
    setMap(mapInstance);
   }
  }).catch(e => {
   console.error("Error loading Google Maps API:", e);
  });
 }, []);

 useEffect(() => {
  if (map) {
   new window.google.maps.marker.AdvancedMarkerElement({
    map,
    position: { lat: 49.121883392333984, lng: -122.66516876220703 },
    title: 'My location',
   });
  }
 }, [map]);

 return (
  <div style={{ height: '60vh', width: '80%', margin: '0 auto' }}>
   <div ref={mapRef} style={{ height: '100%' }}></div>
  </div>
 );
};

export default GoogleMapComponent;
