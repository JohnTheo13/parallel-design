import { css } from 'styled-components';
import * as color from '../utils/colors';
import {
	fontSizeBase,
	fontWeightBase,
	fontFamilySansSerif
} from '../utils/fonts';

const inputHeight = 32; /** TO have relevant font sizes for input and feedback */

const inputPadding = 2; /** TO have same padding for input, feedback and label */

const inputBorder = 2;

const input = {
	textRendering: 'auto',
	letterSpacing: 'normal',
	wordSpacing: 'normal',
	textTransform: 'none',
	textIndent: '0px',
	textShadow: 'none',
	display: 'inline-block',
	textAlign: 'start',
	backgroundColor: 'white',
	cursor: 'text',
	margin: '0em',
	height: `${inputHeight}px`,
	fontSize: `${inputHeight / 2}px`,
	special: {
		default: css`
			border: ${inputBorder}px solid ${color.black};
			outline-color: ${color.cyan};
			color: initial;
			outline-offset: -2px;
			padding: 2px;
		`,
		info: css`
			border-width: 0 0 ${inputBorder}px 0;
			border-color: ${color.black};
			outline: 0;
			color: initial;
			color: ${color.dark};
			padding: 4px;
		`
	},
	feedbackIcon: {
		fontSize: `${inputHeight / 2}px`,
		padding: `${inputHeight / 4}px`
	},
	feedbackMessage: css`
		font-size: ${inputHeight / 2 - 2}px;
		margin: 0 ${inputBorder + inputPadding}px;
	`
};

const label = css`
	width: 100%;
	color: ${color.dark};
	font-family: ${fontFamilySansSerif};
	font-weight: ${fontWeightBase};
	font-size: ${fontSizeBase};
	cursor: pointer;
`;

const checkbox = css`
	label {
		z-index: 0;
		position: relative;
		display: inline-block;
		color: ${color.dark};
		user-select: none;
		&.disabled {
			pointer-events: none;
		}
		/* Span */
		> span {
			display: inline-block;
			width: 100%;
			cursor: pointer;
			color: ${color.dark};
			font-family: ${fontFamilySansSerif};
			font-weight: ${fontWeightBase};
			font-size: ${fontSizeBase};
			line-height: 1.8;
			/* Box */
			&:before {
				content: '';
				display: inline-block;
				box-sizing: border-box;
				margin: 3px 11px 3px 1px;
				border: solid 2px; /* Safari */
				border-color: ${color.gray400};
				border-radius: 4px;
				width: 22px;
				height: 22px;
				vertical-align: top;
				transition: border-color 0.2s, background-color 0.2s;
			}
			/* Checkmark */
			&:after {
				content: '';
				display: block;
				position: absolute;
				top: 4px;
				left: 2px;
				width: 13px;
				height: 8px;
				border: solid 2px transparent;
				border-color: ${color.white};
				border-right: none;
				border-top: none;
			}
		}
		&:hover,
		&:focus {
			> span {
				&:before {
					border-color: ${color.success};
				}
			}
		}

		/* Input */
		> input {
			appearance: none;
			z-index: -1;
			position: absolute;
			left: -10px;
			top: -8px;
			display: block;
			margin: 0;
			border-radius: 50%;
			width: 40px;
			height: 40px;
			background-color: ${color.white};
			box-shadow: none;
			outline: none;
			opacity: 0;
			transform: scale(1);
			pointer-events: none;
			transition: opacity 0.3s, transform 0.2s;

			/* Checked */
			&:checked + span {
				&:before {
					background-color: ${color.success};
					border-color: ${color.success};
				}
				&:after {
					opacity: 1;
					transform: translate(3px, 4px) rotate(-45deg) scale(1);
				}
			}
			&:not(:checked) + span {
				&:after {
					opacity: 0;
					transform: scale(0);
				}
			}

			/* Disabled */
			&:disabled {
				opacity: 0;
				& + span {
					color: ${color.gray600};
					opacity: 0.38;
					&:before {
						background-color: ${color.gray400};
					}
					&:after {
						content: '';
						color: ${color.white};
						line-height: 18px;
						font-size: 24px;
						top: 13px;
						left: 7px;
						transform: scale(1);
						opacity: 1;
						height: 2px;
						width: 10px;
					}
				}
			}
		}
	}

	/* Active */
	label:hover > input:active {
		opacity: 1;
		transform: scale(0);
		transition: transform 0s, opacity 0s;
	}
`;

export { input, label, checkbox };
