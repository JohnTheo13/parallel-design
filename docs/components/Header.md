## Header Component

Header accepts different as props (H1, H2, H3, H4, H5, H6). 

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| as      | string   | -            | +          | H1, H2, H3, H4, H5, H6 |
| style    | object   | -            | -          |  |
| children | node     | -            | +          |  |
| className | string     | -            | -          |  |
| color | string     | -            | -          |  |

### Example

``` js
<Header as="H6" >{props.children}</Header>
```
