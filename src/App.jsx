
import MapGL from 'react-map-gl';
import MapDraw from './MapDraw';
import "./App.css"
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZmVoaWRlMjAyOSIsImEiOiJjbDc4NTdidG4wNml5NDFveHB5MzJqemp0In0.F_ey02z76T-VE3ecmvVKXw';

function App() {

  function updateHandler(e){
    console.log(e)
  }
  function create(e) {
    console.log(e)
  }
  return (
    <div className="container">
       <MapGL
      initialViewState={{
        latitude: 48,
        longitude: 10,
        zoom: 4
      }}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/fehide2029/cl78803tr000014jvnffickxs"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <MapDraw  
        position="top-left"
        displayControlsDefault={false}
        onUpdate={updateHandler}
        onCreate={create}
        renderWorldCopies={false}
        defaultMode="draw_polygon"
        />
    </MapGL>
    </div>
   
  );
}
export default App
