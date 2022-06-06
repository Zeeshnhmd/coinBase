import React from 'react';
import AboutUs from './components/AboutUs';
// import AntdPractice from './components/AntdPractice';
import DailyPrices from './components/DailyPrices';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

export default function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<DailyPrices />
			<AboutUs />
			<Services />
			{/* <AntdPractice /> */}
		</div>
	);
}
