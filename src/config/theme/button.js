import * as color from '../utils/colors';
import { fontSizeBase, fontWeightBase } from '../utils/fonts';

const button = {
	primary: {
		color: color.white,
		background: color.primary,
		border: `1px solid ${color.primary}`,
		hover: {
			outline: 'none',
			background: color.blueLight,
			color: color.white,
			border: `1px solid ${color.blueLight}`
		}
	},
	secondary: {
		color: color.dark,
		background: color.purple,
		border: `1px solid ${color.purple}`,
		hover: {
			outline: 'none',
			background: color.pink,
			color: color.dark,
			border: `1px solid ${color.pink}`
		}
	},
	custom: {
		hover: {}
	},
	/** Shared */
	fontFamily: 'inherit',
	fontSize: fontSizeBase,
	fontWeight: fontWeightBase,
	borderRadius: {
		sharp: '0',
		circled: '40px',
		rounded: '2px'
	},
	disabled: {
		color: color.gray500,
		background: color.gray200,
		border: `1px solid ${color.gray500}`
	}
};

export default button;
