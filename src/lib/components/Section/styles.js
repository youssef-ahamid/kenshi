import { resolve } from '$lib/helpers'

export let section = options => {
  return [
    {
      classes: '',
    },
  ]
}

export let content = options => {
  return [
    {
      on: [options.noContain, false],
      classes: 'e',
    },
  ]
}

export let ctaContainer = options => {
  return [
    {
      classes: '',
    },
  ]
}

export const config = props => {
  return {
    section: resolve(section(props)),
    content: resolve(content(props)),
    ctaContainer: resolve(ctaContainer(props)),
  }
}
