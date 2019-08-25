import React from 'react';
import { Button } from 'buttons';
import CheckTest from './Components/CheckboxCheck';
import './App.css';

function App() {
	return (
		<div className="App">
			<CheckTest />
			<Button tag="primary" height="68px" shape="sharp">
				Primary
			</Button>
		</div>
	);
}

export default App;
