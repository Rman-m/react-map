import Map, { Layer, Source, Marker } from "react-map-gl";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoiZmVoaWRlMjAyOSIsImEiOiJjbDc4NTdidG4wNml5NDFveHB5MzJqemp0In0.F_ey02z76T-VE3ecmvVKXw";
const INITIAL_VIEW_STATE = {
	latitude: 48,
	longitude: 10,
	zoom: 1,
};

function DrawLine({markers}) {
	const createLines = (marks) => {
		const markLines = [];
            marks.forEach(item => {
                const itemEdges = marks.filter(findItem => { return item.edges.includes(findItem.id)})
                itemEdges.forEach(edgeItem => {   markLines.push([[[item.cordinates[0]],[item.cordinates[1]]],[[edgeItem.cordinates[0]],[edgeItem.cordinates[1]]]])}) 
                console.log(itemEdges);
            });
        console.error(markLines);
		return markLines;
	};




	console.log(createLines(markers));
	const sourceData = {
		type: "Feature",
		properties: {},
		geometry: {
			type: "MultiLineString",
			coordinates: createLines(markers),
		},
	};
	return (
		<div className="container">
			<Map
				initialViewState={INITIAL_VIEW_STATE}
				style={{ width: 800, height: 600 }}
				mapStyle="mapbox://styles/fehide2029/cl78803tr000014jvnffickxs"
				mapboxAccessToken={MAPBOX_TOKEN}
			>
				{markers.map((item) => (
					<Marker longitude={item.cordinates[0]} latitude={item.cordinates[1]} />
				))}
				<Source id="polylineLayer" type="geojson" data={sourceData}>
					<Layer
						type="line"
						layout={{
							"line-cap": "round",
						}}
						paint={{
							"line-color": "rgba(0, 0, 238, 0.5)",
							"line-width": 5,
						}}
					></Layer>
				</Source>
			</Map>
		</div>
	);
}
export default DrawLine;






// const copyMarks = [...marks];
// copyMarks.forEach((item, index, array) => {
//     const lastArrayIndex = array.length - 1;
//     console.log({ lastArrayIndex, index });

//     for (let i = index + 1; i <= lastArrayIndex; ++i) {
//         markLines.push([
//             [item[0], item[1]],
//             [array[i][0], array[i][1]],
//         ]);
//     }
// });