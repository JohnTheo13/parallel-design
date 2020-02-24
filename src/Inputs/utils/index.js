import { css } from 'styled-components';

import { colors, fonts as font, themeProps } from '../../config';

const { disabled, primary, dark, white, black } = colors;

const inputHeight = 32; /** TO have relevant font sizes for input and feedback */
const inputPadding = 2; /** TO have same padding for input, feedback and label */

export const labelColor = black;
export const inputBorder = 2;
export const borderStyle = 'solid';
export const inputBorderColor = dark;
export const inputDisabledColor = disabled;
export const inputActiveColor = primary;
export const borderRadius = '3';
export { white };

export const input = {
	height: inputHeight,
	padding: inputPadding,
	border: {
		color: {
			default: inputBorderColor,
			disabled: inputDisabledColor,
			active: inputActiveColor
		},
		width: inputBorder,
		style: borderStyle,
		radius: borderRadius
	},
	choice: {
		color: white
	},
	common: css`
		text-indent: 0px;
		text-shadow: none;
		display: inline-block;
		text-align: start;
		background-color: white;
		cursor: text;
		margin: 0em;
		border: ${inputBorder}px ${borderStyle};
		font-size: ${inputHeight / 2}px;
		width: 100%;
		outline: 0;
		padding: 2px;
		color: ${themeProps('color.dark', dark)};
		border-radius: ${borderRadius};
		box-sizing: border-box;
		&:active,
		&:focus {
			border-color: ${themeProps('color.primary', inputActiveColor)};
		}
		&:disabled {
			border-color: ${themeProps('color.disabled', inputDisabledColor)};
		}
	`,
	hidden: css`
		display: inline;
		opacity: 0;
		margin: 0;
		overflow: hidden;
		appearance: none;
		&:checked {
			& + label:after {
				opacity: 1;
			}
		}
		&:disabled {
			& + label {
				pointer-events: none;
			}

			& + label:after {
				opacity: 1;
				background: ${white};
			}
		}
	`
};

export const label = {
	color: labelColor,
	common: css`
		width: 100%;
		font-family: initial;
		font-weight: initial;
		font-size: ${font.fontSizeBase};
	`,
	/** Checkbox Radio Components */
	choice: css`
		cursor: pointer;
		&:before,
		&:after {
			position: absolute;
			content: '';
			transition: opacity 200ms ease, border-color 200ms ease;
		}
		&:before {
			left: 0;
			top: 5px;
			width: 24px;
			height: 24px;
			border: ${inputBorder}px ${borderStyle};
		}

		&:after {
			top: 14px;
			left: 9px;
			width: 10px;
			opacity: 0;
		}
	`
};
