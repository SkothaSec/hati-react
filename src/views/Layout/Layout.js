import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Home } from '../Home';
import { About } from '../About';
import { PageNotFound } from '../Errors';
import { Section, Container } from '../../components/Layout';

import LayoutNav from './LayoutNav';
import LayoutFooter from './LayoutFooter';
import { Routes } from '../../routes';

//TODO: Get this to work without having to use body.
/**
 * Layout for the whole app is here
 * Body tag needs fixed somehow.
 *
 */
const Layout = () => {
	return (
		<div>
			<LayoutNav />
			<Section>
				<Container fluid>
					<Section>
						<Routes />
					</Section>
				</Container>
			</Section>
			<Section>
				<LayoutFooter />
			</Section>
		</div>
	);
};

export default Layout;
