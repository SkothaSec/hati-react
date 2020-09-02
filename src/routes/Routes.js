import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom'; // renamed Routes for conflict

import { Home } from '../views/Home';
import { About } from '../views/About';
import { PageNotFound } from '../views/Errors';

const Routes = () => {
	return (
		<RouterRoutes>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="404" element={<PageNotFound />} />
		</RouterRoutes>
	);
};

export default Routes;
