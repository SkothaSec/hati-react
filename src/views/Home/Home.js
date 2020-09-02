import React from 'react';
import PropTypes from 'prop-types';
import { Section, Hero } from '../../components/Layout';
import { Header } from '../../components/Typography';

const Home = (props) => {
	const {} = props;

	return (
		<Hero size="fullheight">
			<Header type="h1" color="primary">
				HomePage
			</Header>
		</Hero>
	);
};

export default Home;
