<script>
  export let className = ''
  export let to = ''
  export let text = ''
  export let redirect = false
  export let active = false
  export let activeSub = 0
  export let links = []

  import Go from '$lib/components/Go/index.svelte'
  import List from '$lib/components/List/index.svelte'

  import { slide } from 'svelte/transition'

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    navLinkWrapper,
    navSublinkList,
    navSublink,
    navSublinkActive,
    navSublinkInactive,
  } from './styles'

  $: wrapper = stylus(navLinkWrapper({ active, ...styleOptions }))
  $: list = stylus(navSublinkList({ active, ...styleOptions }))
  $: sublink = stylus(navSublink({ active, ...styleOptions }))
  $: activeSub = stylus(navSublinkActive({ active, ...styleOptions }))
  $: inactiveSub = stylus(
    navSublinkInactive({ active, ...styleOptions })
  )
</script>

<Go {to} {redirect} on:click>
  <h5 class={`${wrapper.classes} ${className}`}>
    {#if text != ''}
      {text}
    {:else}
      <slot />
    {/if}
  </h5>
</Go>

{#if links.length > 0}
  <div transition:slide={{ duration: 300 }}>
    <List items={links} let:prop={link} className={list.classes}>
      <Go to={link.to} redirect={link.redirect}>
        <h4
          class={`${sublink.classes} ${
            active && activeSub === links.indexOf(link)
              ? activeSub.classes
              : inactiveSub.classes
          }`}
        >
          {link.text}
        </h4>
      </Go>
    </List>
  </div>
{/if}
