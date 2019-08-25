import React from 'react';
import Hamburger from './Hamburger.svg';
import Magnifier from './Magnifier.svg';
import Clock from './Clock.svg';
import Location from './LocationMarker.svg';
import ArrowRight from './ArrowRight.svg';
import Close from './CloseIcon.svg';
import Profile from './Profile.svg';
import ArrowLeft from './ArrowLeft.svg';
import Plus from './Plus.svg';
import * as names from './IconNames';

const icons = name => {
	switch (name) {
		case names.HAMBURGER_ICON:
			return <Hamburger />;
		case names.MAGNIFIER:
			return <Magnifier />;
		case names.CLOCK:
			return <Clock />;
		case names.LOCATION:
			return <Location />;
		case names.ARROW_RIGHT:
			return <ArrowRight />;
		case names.ARROW_LEFT:
			return <ArrowLeft />;
		case names.CLOSE:
			return <Close />;
		case names.PROFILE:
			return <Profile />;
		case names.PLUS:
			return <Plus />;
		default:
			return null;
	}
};

export default icons;

export { names };
