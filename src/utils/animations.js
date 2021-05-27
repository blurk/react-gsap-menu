import { gsap } from 'gsap';

export const staggerReveal = (node1, node2) => {
	gsap.from([node1, node2], {
		duration: 0.8,
		height: 0,
		transformOrigin: 'right top',
		skewY: 2,
		ease: 'power3.inOut',
		stagger: {
			amount: 0.1
		}
	});
};

export const staggerText = (node1, node2, node3) => {
	gsap.from([node1, node2, node3], {
		duration: 0.8,
		y: 100,
		delay: 0.1,
		ease: 'power3.inOut',
		stagger: {
			amount: 0.3
		}
	});
};

export const fadeInUp = (node) => {
	gsap.from(node, {
		duration: 1,
		y: 60,
		delay: 0.2,
		opacity: 0,
		ease: 'power3.inOut'
	});
};

export const hideMenuBackgrounds = (node1, node2) => {
	gsap.to([node1, node2], {
		duration: 0.8,
		height: 0,
		ease: 'power3.inOut',
		stagger: {
			amount: 0.07
		}
	});
};

export const hideMenu = (node) => {
	gsap.to(node, {
		duration: 1,
		css: {
			display: 'none'
		}
	});
};

export const revealMenuBackgrounds = (node1, node2) => {
	gsap.to([node1, node2], {
		duration: 0,
		opacity: 1,
		height: '100%'
	});
};

export const revealMenu = (node) => {
	gsap.to(node, {
		duration: 0,
		css: {
			display: 'block'
		}
	});
};

export const handleCityEnter = (cityImage, target) => {
	gsap.to(target, {
		duration: 0,
		background: `url(${cityImage}) center center`
	});
	gsap.to(target, {
		duration: 0.4,
		opacity: 1,
		ease: 'power3.inOut'
	});
	gsap.from(target, {
		duration: 0.4,
		skewY: 2,
		transformOrigin: 'right top'
	});
};

export const handleCityOut = (target) => {
	gsap.to(target, {
		duration: 0.4,
		opacity: 0
	});
};

export const hanldeLinkHover = (e) => {
	gsap.to(e.target, {
		duration: 0.3,
		y: 3,
		skewX: 4,
		ease: 'power3.inOut'
	});
};

export const hanldeLinkHoverExit = (e) => {
	gsap.to(e.target, {
		duration: 0.3,
		y: -3,
		skewX: 0,
		ease: 'power3.inOut'
	});
};
