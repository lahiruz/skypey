import React from 'react';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './App.css';

function App() {
	return (
		<div className="app">
			<Sidebar/>
			<Main/>
		</div>
	);
}

export default App;
