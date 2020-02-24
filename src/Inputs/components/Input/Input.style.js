import styled from 'styled-components';
import { themeProps, colors } from '../../../config';

import { input, label, inputBorderColor, inputBorder } from '../../utils';

const { common, text, textarea } = input;

const FieldWrapper = styled.div`
	width: ${({ width }) => width};
	position: relative;
	label {
		color: ${(themeProps('label.color'), label.color)};
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
		height: ${({ height }) => height}px;
		${themeProps('input.common', common)};
		border-color: ${({ feedback }) =>
			feedback && feedback.status
				? themeProps(`color.${feedback.status}`, colors[feedback.status])
				: themeProps('input.border.color.default', inputBorderColor)};
		${({ feedback }) =>
			feedback.message &&
			'padding-right: 26px'}; /* In case of feedback increase padding right */
	}
	> i {
		position: absolute;
		right: 0; /** 26+ */
		font-size: ${({ height }) => height - height / 4}px;
		padding: ${({ height }) => height / 8}px;
		color: ${({ feedback }) =>
			feedback &&
			feedback.status &&
			themeProps(`color.${feedback.status}`, colors[feedback.status])};
	}
	> div.feedback {
		font-size: ${({ height }) => height / 2 - 2}px;
		margin: 0
			${themeProps('input.border.width', inputBorder) +
				themeProps('input.padding')}px;
		color: ${({ feedback }) =>
			feedback &&
			feedback.status &&
			themeProps(`color.${feedback.status}`, colors[feedback.status])};
	}
`;

export default FieldWrapper;
