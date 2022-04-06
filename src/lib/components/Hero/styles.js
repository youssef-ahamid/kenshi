import { resolve } from '$lib/helpers'

export let hero = options => {
  return [
    {
      classes:
        '',
    },
    { on: [options.fullHeight, true], classes: '' },
    { on: [options.reverse, true], classes: '' },
    { on: [options.reverse, false], classes: '' },
  ]
}

export let cta = options => {
  return [
    {
      classes:
        '',
    },
  ]
}

export let logoWrapper = ''
export let logo = ''
export let logoInner = ''
export let logoOuter = ''

export let left = ''
export let right = ''

let options
export const config = props => {
  options = props
  return {
    hero: resolve(hero(options)),
    cta: resolve(cta(options)),
    left,
    right,
    logo,
    logoInner,
    logoOuter,
    logoWrapper
  }
}
