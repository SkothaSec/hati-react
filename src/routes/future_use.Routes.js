import React from 'react';
// import { Routes as RouterRoutes, Route } from 'react-router-dom'; // renamed Routes for conflict
import shortid from 'shortid';
import { Home, About } from '../views';
import { ExampleView, ExampleSubView } from '../views/Examples';

const genRoute = (path, element, subObj = false) => {
	// defaulting sub with false for mapping simplification
	return {
		path,
		element,
		id: shortid.generate(),
		...(subObj && {
			sub: {
				path: subObj.path,
				element: subObj.element,
				id: shortid.generate,
			},
		}),
	};
};

export const routes = [
	genRoute('/', <Home />),
	genRoute('/about', <About />),
	genRoute('/example', <ExampleView />, {
		path: '/sub-example',
		element: <ExampleSubView />,
	}),
];

/*
const Routes = () => {
	return (
		<RouterRoutes>
			<Route path="/" element={Home} />
			<
		</RouterRoutes>
	)
};

export default Routes;
*/
