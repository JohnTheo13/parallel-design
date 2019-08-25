import styled from 'styled-components';
import { themeProps } from '../../config';

import button from '../utils';

const { shared } = button;

const StyledButton = styled.button`
	${themeProps('button.shared', shared)}
	${({ tag }) => themeProps(`button.${tag}`, button[tag])}
	border-radius: ${({ shape }) =>
		themeProps(`button.borderRadius.${shape}`, button.borderRadius[shape])};
	cursor: pointer;
	height: ${({ height }) => height};
	width: ${({ width }) => width};
`;

export default StyledButton;
