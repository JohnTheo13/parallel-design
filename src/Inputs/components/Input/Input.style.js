import styled from 'styled-components';
import { themeProps, colors } from '../../../config';

import { input, label, inputBorderColor } from '../../utils';

const {
	common,
	text,
	textarea,
	feedback: { icon, message }
} = input;

const FieldWrapper = styled.div`
	width: ${({ width }) => width};
	position: relative;
	label {
		${themeProps('label.common', label.common)};
		display: block;
		margin: 0 0.2rem 0 4px;
	}
	textarea {
		${themeProps('input.textarea', textarea)};
	}
	input {
		${themeProps('input.text', text)};
	}
	input,
	textarea {
		${themeProps('input.common', common)};
		border-color: ${({ feedback }) =>
			feedback && feedback.status
				? themeProps(`color.${feedback.status}`, colors[feedback.status])
				: themeProps('input.border.color.default', inputBorderColor)};
		${({ feedback }) =>
			feedback &&
			'padding-right: 26px'}; /* In case of feedback increase padding right */
	}
	> i {
		position: absolute;
		right: 0;
		${themeProps('input.feedback.icon', icon)};
		color: ${({ feedback }) =>
			feedback &&
			feedback.status &&
			themeProps(`color.${feedback.status}`, colors[feedback.status])};
	}
	> div.feedback {
		${themeProps('input.feedback.message', message)};
		color: ${({ feedback }) =>
			feedback &&
			feedback.status &&
			themeProps(`color.${feedback.status}`, colors[feedback.status])};
	}
`;

export default FieldWrapper;
