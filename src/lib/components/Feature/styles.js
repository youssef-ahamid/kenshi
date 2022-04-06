import { resolve } from '$lib/helpers'

export let feature = options => {
  return [
    {
      classes:
        '',
    },
    {
      on: [options.reverse, true],
      classes:
        '',
    },
    {
      on: [options.reverse, false],
      classes: '',
    },
  ]
}

export let left = options => {
  return [
    {
      classes: '',
    },
    {
      on: [options.reverse, true],
      classes: '',
    },
    {
      on: [options.reverse, false],
      classes: '',
    },
  ]
}

export let right = options => {
  return [
    {
      classes: '',
    },
  ]
}

export let image = options => {
  return [
    {
      classes: '',
    },
  ]
}

let options
export const config = props => {
  options = props
  return {
    feature: resolve(feature(options)),
    left: resolve(left(options)),
    right: resolve(right(options)),
    image: resolve(image(options)),
  }
}
