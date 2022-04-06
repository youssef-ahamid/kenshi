import { resolve } from '$lib/helpers'

export let titleWrapper = props => {
  return [{ classes: '' }]
}

export let line = props => {
  return [
    {
      classes: '',
    },
  ]
}

export let title = props => {
  return [{ classes: '' }]
}

let options
export const config = props => {
  options = props
  return {
    titleWrapper: resolve(titleWrapper(options)),
    line: resolve(line(options)),
    title: resolve(title(options)),
  }
}
