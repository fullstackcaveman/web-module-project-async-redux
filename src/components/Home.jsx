import { Switch, Link } from 'react-router-dom';
import Background from './Background';

const Home = () => {
	document.title = 'Star Wars Universe';

	return (
		<Switch>
			<>
				<div id='home' className='home'>
					<div className='links-container'>
						<Link to='/characters'>
							<div className='characters-link' />
						</Link>
					</div>

					<Background />
				</div>
			</>
		</Switch>
	);
};

export default Home;
