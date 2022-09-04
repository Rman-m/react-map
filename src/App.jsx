import "./App.css";
import DrawLine from "./marker/DrawLine"

const MARKERS = [
	{
		id: 1,
		cordinates:[89, 56],
		edges: [2,3,4]
	},
	{
		id: 2,
		cordinates:[89, 40],
		edges: [3,4],

	},
	{
		id:3,
		cordinates:[21, 67],
		edges: [4]
	},
	{
		id: 4,
		cordinates:[20, 43],
		edges: []
	},

	{
		id: 5,
		cordinates:[-45, 56],
		edges: [6,7,8]
	},
	{
		id: 6,
		cordinates:[-89, 40],
		edges: [7,8],

	},
	{
		id:7,
		cordinates:[-21, 67],
		edges: [8]
	},
	{
		id: 8,
		cordinates:[-20, 43],
		edges: []
	},
];

const  App = ()=> <DrawLine markers= {MARKERS}/>
export default App;
