import React from 'react';
import AboutUs from './components/AboutUs';
// import AntdPractice from './components/AntdPractice';
import DailyPrices from './components/DailyPrices';
import Home from './components/Home';
import Navbar from './components/Navbar';
import RoadMap from './components/RoadMap';
import Services from './components/Services';
import Signup from './components/Signup';

export default function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<DailyPrices />
			<AboutUs />
			<Services />
			<Signup />
			<RoadMap />
			{/* <AntdPractice /> */}
		</div>
	);
}
