import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './views/Layout';

import { useMediaQuery } from 'react-responsive';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding: ${(props) => (props.bottom ? `0 0 3.25rem 0` : `0 0 0 0`)};
    }
`;
const App = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 568px)' });
	const isPortrait = useMediaQuery({ orientation: 'portrait' });
	const isMobileOrPortrait = isTabletOrMobile || isPortrait;
	return (
		<Router>
			<Layout />
			{isMobileOrPortrait ? <GlobalStyle bottom /> : <GlobalStyle />}
		</Router>
	);
};
export default App;
