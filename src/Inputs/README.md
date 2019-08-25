# `inputs`

### Description
- Text Inputs
- TextArea
- CheckBox
- RadioInput

## Usage
```
<Input
	placeholder="placeholder" 		/* Optional */
	label="Label" 					/* Optional */
	name="test"	
	width="150px"						/* Optional default 100% */
	type="textaria"					/* Optional default text */
	feedback={{							/* Optional */
		status: 'error',			/* For showing feedback errors */
		message: 'error'
	})}
	onChange={method}
	{/* onChange, disabled, class, will be passed down to the input component */}
/>
```
Checkbox and Radio have an additonal checked mandatory field

## Default theme for package

```
{
	input: {
		border: {
			color: {
				default: inputBorderColor,
				disabled: inputDisabledColor,
				active: inputActiveColor
			},
			width: `${inputBorder}px`,
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
			color: initial;
			border: ${inputBorder}px ${borderStyle};
			font-size: ${inputHeight / 2}px;
			width: 100%;
			&:active,
			&:focus {
				border-color: ${primary};
			}
			&:disabled {
				border-color: ${inputDisabledColor};
			}
		`,
		text: css`
			outline-color: ${cyan};
			outline-offset: -2px;
			padding: 2px;
			height: ${inputHeight}px;
		`,
		textarea: css`
			height: ${inputHeight * 4}px;
		`,
		infoInput: css`
			border-width: 0 0 ${inputBorder}px 0;
			outline: 0;
			color: ${dark};
			padding: 4px;
			border-radius: 0;
		`,
		feedback: {
			icon: css`
				font-size: ${inputHeight / 2}px;
				padding: ${inputHeight / 4}px;
			`,
			message: css`
				font-size: ${inputHeight / 2 - 2}px;
				margin: 0 ${inputBorder + inputPadding}px;
			`
		},
		hidden: css`
			display: inline;
			opacity: 0;
			width: 0;
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
	},
	label: {
		color: dark,
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
				top: 12px;
				left: 7px;
				width: 10px;
				opacity: 0;
			}
		`
	}
};
```
