# react-isrequiredif
Conditionally require a prop based on other props

Example:

```
SuperHero.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string,
  button: PropTypes.string,
  url: PropTypes.string,
  secondButton: PropTypes.string,
  secondAction: (...args) => isRequiredIf(
    ...args, ['secondButton'], ['string', 'func']
  )
}
```

Docs:

`isRequiredIf(...args, requiredProps, type)`

- `requiredProps` is an array of prop names or a string of a single prop name. If a requiredProp has a value and the prop does not, it will return an error.

- `type` is an array of PropTypes or a string of a single PropType. This works functionally the same as `React.PropTypes.oneOfType`.
