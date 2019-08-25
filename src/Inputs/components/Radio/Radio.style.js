import styled from 'styled-components';

import { themeProps } from '../../../config';

import {
	inputActiveColor,
	input,
	label,
	inputBorderColor,
	inputDisabledColor,
	labelColor
} from '../../utils';

const { common, choice } = label;
const { hidden } = input;

const FieldWrapper = styled.div`
	position: relative;
	label {
		${themeProps('label.common', common)};
		line-height: 2;
		margin: 0 36px; /* Bullet width + margin 12px */
		color: ${themeProps('label.color', themeProps('color.dark', labelColor))};
		${themeProps('label.choice', choice)};
		&:before,
		&:after {
			border-radius: 50%;
		}
		&:before {
			border-color: ${themeProps(
				'input.border.color.default',
				themeProps('color.secondary', inputBorderColor)
			)};
		}
		&:after {
			height: 10px;
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
			& + label:after {
				background: ${themeProps(
					'input.border.color.active',
					themeProps('color.primary', inputActiveColor)
				)};
			}
			& + label:before {
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
		}
		${themeProps('input.hidden', hidden)};
	}
`;

export default FieldWrapper;
