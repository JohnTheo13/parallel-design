# Buttons

## Usage

```
<Button
	tag="primary" 			/* oneOf('primary', 'secondary', 'ghost', 'custom' => if defiened) *?
	height="80px" 			/* Optional default 100% */
	width="150px"		      /* Optional default 100% */
	shape="rounded" 		/* oneOf('sharp', 'rounded', 'circled') */
	{/* type, disabled, className, style, any will be passed to the button component */}
>
	{children}
</Button>
```

### Default Button Theme
```
button: {
	shared: css`
		font-family: initial;
		font-size: ${fontSizeBase};
		font-weight: ${fontWeightBase};
		&:disabled {
			color: ${themeProps('color.white', white)};
			background-color: ${themeProps('color.disabled', disabled)};
			border-color: ${themeProps('color.disabled', disabled)};
		}
	`,
	borderRadius: {
		sharp: '0',
		circled: '40px',
		rounded: '2px'
	},
	primary: css`
		color: ${themeProps('colors.white', white)};
		background-color: ${themeProps('colors.primary', primary)};
		border: 1px solid ${themeProps('colors.primary', primary)};
		&:hover {
			outline: none;
			background-color: ${themeProps('colors.blueLight', blueLight)};
		}
	`,
	secondary: css`
		color: ${themeProps('colors.white', white)};
		background-color: ${themeProps('colors.secondary', secondary)};
		border: 1px solid ${themeProps('colors.secondary', secondary)};
		&:hover {
			outline: none;
			background-color: ${themeProps('colors.pink', pink)};
			color: ${themeProps('color.dark', dark)};
			border-color: ${themeProps('colors.pink', pink)};
		}
	`,
	ghost: css`
		color: ${themeProps('colors.primary', primary)};
		background-color: transparent;
		border: 1px solid ${themeProps('colors.primary', primary)};
		&:hover {
			outline: none;
			color: ${themeProps('colors.secondary', secondary)};
			border: 1px solid ${themeProps('colors.secondary', secondary)};
		}
	`,
	custom: css``
}
```