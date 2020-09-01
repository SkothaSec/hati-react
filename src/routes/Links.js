import React from 'react';
import shortid from 'shortid';
import { Link } from '../components/Navbar';

const genLink = (to, title, subObj = false) => {
	// defaulting sub with false for mapping simplification
	const linkObj = {
		to,
		title,
		id: shortid.generate(),
		...(subObj && {
			sub: {
				to: subObj.path,
				title: subObj.element,
				id: shortid.generate,
			},
		}),
	};

	return linkObj;
};

const links = [genLink('/', 'Home'), genLink('/about', 'About')];
const Links = () => {
	return links.map(({ to, title, id, sub }) => (
		<Link to={to} key={id} styles={{ padding: 5 }} title={title}>
			{sub && <Link to={`${to}/${sub.to}`} title={sub.title} />}
		</Link>
	));
};

export default Links;
