import React from 'react';
import { Link } from 'react-router-dom';

export default function Hamburger() {
	return (
		<div className='hamburger-menu'>
			<div className='menu-secondary-background-color'></div>
			<div className='menu-layer'>
				<div className='menu-city-background'></div>
				<div className='container'>
					<div className='wrapper'>
						<div className='menu-links'>
							<nav>
								<ul>
									<li>
										<Link to='/opportunities'>Oppoturnities</Link>
									</li>
									<li>
										<Link to='/solutions'>Solutions</Link>
									</li>
									<li>
										<Link to='/contact-us'>Contact</Link>
									</li>
								</ul>
							</nav>
							<div className='info'>
								<h3>Our Promise</h3>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Accusamus molestias assumenda eveniet autem quam veritatis
									possimus eligendi, rem numquam dicta!
								</p>
							</div>

							<div className='locations'>
								Locations:<span>Dalas</span>
								<span>Austin</span>
								<span>New York</span>
								<span>San Francisco</span>
								<span>Beijing</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
