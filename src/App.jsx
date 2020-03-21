//@flow
import React from 'react';
import './App.css';
import { MazeMapWrapper } from './MazeMapWrapper';

declare var Mazemap: any;

function makeMazeMapInstance() {
	const mazemapRoot = document.createElement('div');
	mazemapRoot.className = "mazemap-root";
	const mapOptions = {
	    container: mazemapRoot,
	    campuses: 'default',
	    center: {lng: 30, lat: 30},
	    zoom: 1,
	    zLevel: 1,
	 };
	const map = new Mazemap.Map(mapOptions);
	// For debugging, it helps to add the map to global window
	// to quickly access methods like window.mazemapinstance.getZoom(), etc.
	// window.mazemapinstance = map;
	return map;
}

// Make a "global" map instance to use throughout the app lifetime
// and pass it around to components that need to interact with it
const map = makeMazeMapInstance();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a sample MazeMap Project built with React
        </p>
      </header>
      <MazeMapWrapper map={map}></MazeMapWrapper>
    </div>
  );
}

export default App;
