import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	list: {
		width: 200,
	},
	fullList: {
		width: 'auto',
	},
});

const Header = () => {
	const history = useHistory();

	return (
		<header id='header' className='header'>
			<div className='header-left'>{/* <h1>HEADER</h1> */}</div>
			<div className='nav-btn'>
				<Link to='/'>
					<Button variant='contained' size='small'>
						Home
					</Button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
