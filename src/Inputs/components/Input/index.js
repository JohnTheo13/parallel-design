// @flow
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import FieldWrapper from './Input.style';

type InputType = {
	type?: string,
	label?: string,
	width?: string,
	height?: number,
	/** one of: 'error' | 'warning' | 'success' */
	feedback?: {
		status: 'error' | 'warning' | 'success',
		message: string
	},
	name: string
};

const iconMap = {
	error: 'close',
	warning: 'warning',
	success: 'done'
};

const Input = ({
	type,
	label,
	width,
	feedback,
	height,
	...props
}: InputType) => (
	<FieldWrapper feedback={feedback} width={width} height={height}>
		{!!label && <label htmlFor={props.name}>{label}</label>}
		{feedback && feedback.status && (
			<i className="material-icons">{iconMap[feedback.status]}</i>
		)}
		{type !== 'textarea' ? (
			<input type={type} {...props} />
		) : (
			<textarea {...props} />
		)}
		{feedback && feedback.message && (
			<div className="feedback">{feedback.message}</div>
		)}
	</FieldWrapper>
);

Input.defaultProps = {
	type: 'text',
	width: '100%',
	height: 30,
	feedback: undefined,
	label: ''
};

export default Input;
