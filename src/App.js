import React from 'react';
import AboutUs from './components/AboutUs';
import DailyPrices from './components/DailyPrices';
import Home from './components/Home';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<DailyPrices />
			<AboutUs />
		</div>
	);
}
