import Map, { Layer, Source, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MarkerInner from "./MarkerInner";
import { useState } from "react";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoiZmVoaWRlMjAyOSIsImEiOiJjbDc4NTdidG4wNml5NDFveHB5MzJqemp0In0.F_ey02z76T-VE3ecmvVKXw";
const INITIAL_VIEW_STATE = {
	latitude: 48,
	longitude: 10,
	zoom: 1,
};

function DrawLine({ markers }) {
	const [markLines, setMarkLines] = useState([]);

	const createLines = (hoverdMark) => {
		const { edges, id, cordinates } = hoverdMark;
		const hoverdMarkLines = [];
		const conectedPoints = markers.filter(
			(item) =>
				edges.some((hoverdSome) => hoverdSome === item.id) ||
				item.edges.some((filterdEdgeSome) => filterdEdgeSome === id)
		);
		conectedPoints.forEach((connectedItem) => {
			hoverdMarkLines.push([
				[cordinates[0], cordinates[1]],
				[connectedItem.cordinates[0], connectedItem.cordinates[1]],
			]);
		});
			setMarkLines(hoverdMarkLines)	
	}
	const removeLines = () => {
		setMarkLines([])
	}

	const sourceData = {
		type: "Feature",
		properties: {},
		geometry: {
			type: "MultiLineString",
			coordinates: markLines,
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
					<Marker
						key={item.id}
						anchor="bottom"
						longitude={item.cordinates[0]}
						latitude={item.cordinates[1]}
					>
						<MarkerInner array={item} showLines={createLines} removeLines={removeLines} />
					</Marker>
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

// const createLines = (marks) => {
// 	const markLines = [];
// 	marks.forEach((item, index, array) => {
// 		const itemEdges = array.filter((findItem) => {
// 			return item.edges.includes(findItem.id);
// 		});
// 		itemEdges.forEach((edgeItem) => {
// 			markLines.push([
// 				[[item.cordinates[0]], [item.cordinates[1]]],
// 				[[edgeItem.cordinates[0]], [edgeItem.cordinates[1]]],
// 			]);
// 		});
// 		console.log(itemEdges);
// 	});
// 	console.error(markLines);
// 	return markLines;
// };
