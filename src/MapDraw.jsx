import React from "react";
import { useControl } from "react-map-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

function MapDraw(props) {
	useControl(
		() => new MapboxDraw(props),
		({ map }) => {
      console.log(map);
			map.on("draw.create", props.onCreate);
			map.on("draw.update", props.onUpdate);
		},

		{
			position: props.position,
		}
	);
	return <div>askk</div>;
}

export default MapDraw;
