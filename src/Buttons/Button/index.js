// @flow
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import StyledButton from './Button.style';

type ButtonType = {
	height?: string,
	width?: string,
	/** tag 'primary' | 'secondary' | 'ghost' | 'custom' => (you can create your own) */
	tag: string,
	/** 'sharp' | 'rounded' | 'circled' */
	shape: 'sharp' | 'rounded' | 'circled',
	type?: string,
	children: Node
};

const Button = ({ children, ...props }: ButtonType) => ( 
	<StyledButton {...props}>{children}</StyledButton>
);

Button.defaultProps = {
	type: 'button',
	height: '100%',
	width: '100%'
};

export default Button;
