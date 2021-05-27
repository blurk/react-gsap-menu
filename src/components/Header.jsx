import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Hamburger from './Hamburger';

function Header({ history }) {
	const [state, setState] = useState({
		initial: false,
		clicked: null,
		menuName: 'Menu'
	});

	const [disabled, setDisabled] = useState(false);

	const disableMenu = () => {
		setDisabled(!disabled);
		setTimeout(() => {
			setDisabled(false);
		}, 1200);
	};

	useEffect(() => {
		history.listen(() => {
			setState({ clicked: false, menuName: 'Menu' });
		});
	}, []);

	const handleMenuClick = () => {
		disableMenu();
		if (state.initial === false) {
			setState({
				initial: null,
				clicked: true,
				menuName: 'Close'
			});
		} else if (state.clicked === true) {
			setState((prevState) => ({
				...prevState,
				clicked: !state.clicked,
				menuName: 'Menu'
			}));
		} else if (state.clicked === false) {
			setState((prevState) => ({
				...prevState,
				clicked: !state.clicked,
				menuName: 'Close'
			}));
		}
	};

	return (
		<header>
			<div className='container'>
				<div className='wrapper'>
					<div className='inner-header'>
						<div className='logo'>
							<Link to='/'>177013.</Link>
						</div>
						<div className='menu'>
							<button disabled={disabled} onClick={handleMenuClick}>
								{state.menuName}
							</button>
						</div>
					</div>
				</div>
			</div>

			<Hamburger state={state} />
		</header>
	);
}

export default withRouter(Header);
