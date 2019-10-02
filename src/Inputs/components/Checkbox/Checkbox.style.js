import styled from 'styled-components';

import { themeProps } from '../../../config';

import {
	input,
	inputActiveColor,
	label,
	borderRadius,
	inputBorderColor,
	inputDisabledColor,
	white
} from '../../utils';

const { common, choice } = label;
const { hidden } = input;

const CheckboxWrapper = styled.div`
	position: relative;
	label {
		${themeProps('label.common', common)};
		line-height: 2.4;
		margin: 0 36px; /* checkbox width + margin 12px */
		${themeProps('label.choice', choice)};
		&:before {
			border-radius: ${themeProps('input.border.radius', borderRadius)};
			border-color: ${themeProps(
				'input.border.color.default',
				themeProps('color.secondary', inputBorderColor)
			)};
		}
		&:after {
			height: 5px;
			transform: rotate(-45deg);
			border: solid 1px transparent;
			border-color: ${themeProps('input.checkbox.color', white)};
			border-right: none;
			border-top: none;
		}
		&:hover {
			&:before {
				border-color: ${themeProps(
					'input.border.color.active',
					themeProps('color.primary', inputActiveColor)
				)};
			}
		}
	}

	input {
		&:checked {
			& + label:before {
				background: ${themeProps(
					'input.border.color.active',
					themeProps('color.primary', inputActiveColor)
				)};
				border-color: ${themeProps(
					'input.border.color.active',
					themeProps('color.primary', inputActiveColor)
				)};
			}
		}
		&:disabled {
			& + label {
				color: ${themeProps('input.border.color.disabled', inputDisabledColor)};
				&:before {
					background: ${themeProps(
						'input.border.color.disabled',
						inputDisabledColor
					)};
					border-color: ${themeProps(
						'input.border.color.disabled',
						inputDisabledColor
					)};
				}
			}
			& + label:after {
				opacity: 1;
				transform: rotate(0);
				width: 10px;
				height: 2px;
				top: 17px;
			}
		}
		${themeProps('input.hidden', hidden)};
	}
`;

export default CheckboxWrapper;
