import { resolve } from '$lib/helpers'

export let stepperStyles = props => {
  return [
    { classes: ' },
    { on: [props.direction, 'vertical'], classes: '' },
    { on: [props.direction, 'horizontal'], classes: '' },
  ]
}

export let stepStyles = props => {
  return [
    {
      classes: '',
    },
    {
      on: [props.direction, 'vertical'],
      classes: '',
    },
    {
      on: [props.direction, 'horizontal'],
      classes: '',
    },
  ]
}

export let activeStyles = props => {
  return [
    { classes: '' },
    { on: [props.direction, 'vertical'], classes: '' },
    {
      on: [props.direction, 'horizontal'],
      classes: '',
    },
  ]
}

export let inactiveStyles = props => {
  return [
    { classes: '' },
    { on: [props.direction, 'vertical'], classes: '' },
    { on: [props.direction, 'horizontal'], classes: '' },
  ]
}

let options
export const config = props => {
  options = props
  return {
    stepper: resolve(stepperStyles(options)),
    step: resolve(stepStyles(options)),
    active: resolve(activeStyles(options)),
    inactive: resolve(inactiveStyles(options)),
  }
}
