<script>
  /* props */
  export let type = 'primary' // *, secondary
  export let shape = 'default' // *, ghost, full,
  export let icon = null // *, icon component
  export let className = '' // *, custom wrapper classes
  export let label = '' // *, button text
  export let active = true // *, false
  export let reverse = false // *, true
  export let styleOptions = {}

  /* styles */
  import { stylus } from '$lib/helpers'
  import { button, buttonLabel, buttonIcon } from './styles'

  $: wrapper = stylus(button({ type, active, shape, reverse, ...styleOptions }))
  $: label = stylus(buttonLabel({ type, active, shape, reverse, ...styleOptions }))
  $: icon = stylus(buttonIcon({ type, active, shape, reverse, ...styleOptions }))
</script>

<button
  on:click
  on:dblclick
  class={`${wrapper.classes} ${className}`}
  style={wrapper.styles}
  type="button"
>
  <h3 class={label.classes} style={label.styles}>
    {label}
  </h3>
  {#if !!icon}
    <span class={icon.classes} style={icon.styles}><svelte:component this={icon} /></span>
  {/if}
</button>
