import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom'; // renamed Routes for conflict

import { Home } from '../views/Home';
import { About } from '../views/About';

const Routes = () => {
	return (
		<RouterRoutes>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
		</RouterRoutes>
	);
};

export default Routes;
