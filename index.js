const isRequiredIf = (props, propName, componentName, location, requiredProps, type) => {
  const prop = props[propName]
  const rProps = [].concat(requiredProps)
  let isRequired = false

  rProps.forEach((requiredProp) => {
    if (isRequired) return
    if (props[requiredProp] && !prop) {
      isRequired = new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'. '${propName}' is required when the prop '${requiredProp}' is set.`
      )
    }
  })

  if (isRequired) return isRequired

  const types = [].concat(type)
  let correctType = false

  types.forEach((t) => {
    if (isRequired || correctType) return
    if (typeof prop === t) {
      correctType = true
      return
    }
    if (typeof prop !== t) {
      isRequired = new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'. Expected type(s) of '${type}', but instead got '${typeof prop}'.`
      )
    }
  })

  if (isRequired) return isRequired

  return null
}

export default isRequiredIf
