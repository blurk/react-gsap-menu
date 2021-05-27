import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import danang from '../images/danang.webp';
import newyork from '../images/newyork.webp';
import hanoi from '../images/hanoi.webp';
import phuquoc from '../images/phuquoc.webp';
import hcm from '../images/hcm.webp';

import {
	staggerText,
	fadeInUp,
	staggerReveal,
	hideMenu,
	hideMenuBackgrounds,
	revealMenu as revealMenuFn,
	revealMenuBackgrounds,
	hanldeLinkHoverExit,
	hanldeLinkHover,
	handleCityEnter,
	handleCityOut
} from '../utils/animations';

const CITIES = [
	{ name: 'Da Nang', image: danang },
	{ name: 'Ha Noi', image: hanoi },
	{ name: 'New york', image: newyork },
	{ name: 'Ho Chi Minh City', image: hcm },
	{ name: 'Phu Quoc', image: phuquoc }
];

const LINKS = [
	{ name: 'Oppoturnities', to: '/opportunities' },
	{ name: 'Solutions', to: '/solutions' },
	{ name: 'Contact', to: '/contact-us' }
];

export default function Hamburger({ state }) {
	let menu = useRef(null);
	let revealMenu = useRef(null);
	let revealMenuBackground = useRef(null);
	let info = useRef(null);

	useEffect(() => {
		if (state.clicked === false) {
			hideMenuBackgrounds(revealMenu, revealMenuBackground);
			hideMenu(menu);
		} else if (
			state.clicked === true ||
			(state.clicked === true && state.initial === null)
		) {
			revealMenuFn(menu);
			revealMenuBackgrounds(revealMenuBackground, revealMenu);
			staggerReveal(revealMenuBackground, revealMenu);
			fadeInUp(info);
			staggerText('.line1', '.line2', '.line3');
		}
	}, [state]);

	return (
		<div ref={(el) => (menu = el)} className='hamburger-menu'>
			<div
				ref={(el) => (revealMenuBackground = el)}
				className='menu-secondary-background-color'></div>
			<div ref={(el) => (revealMenu = el)} className='menu-layer'>
				<div className='menu-city-background'></div>
				<div className='container'>
					<div className='wrapper'>
						<div className='menu-links'>
							<nav>
								<ul>
									{LINKS.map((item, index) => (
										<li key={item.name} className={`line${index + 1}`}>
											<Link
												to={item.to}
												onMouseEnter={hanldeLinkHover}
												onMouseOut={hanldeLinkHoverExit}>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</nav>
							<div ref={(el) => (info = el)} className='info'>
								<h3>Our Promise</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Accusamus molestias assumenda eveniet autem quam veritatis
									possimus eligendi, rem numquam dicta!
								</p>
							</div>

							<div className='locations'>
								Locations:
								{CITIES.map((city) => (
									<span
										key={city.name}
										onMouseEnter={() =>
											handleCityEnter(city.image, '.menu-city-background')
										}
										onMouseOut={() => handleCityOut('.menu-city-background')}>
										{city.name}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
