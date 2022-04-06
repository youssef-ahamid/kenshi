<script>
  /* props */
  export let styleOptions = {}
  export let src = ''
  export let alt = ''
  export let clip = false
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { stylus } from '$lib/helpers'
  import { imgWrapper, imgOverlay, img } from './styles'

  $: wrapper = stylus(imgWrapper(styleOptions))
  $: overlay = stylus(imgOverlay({ src, ...styleOptions }))
  $: image = stylus(img(styleOptions))
</script>

<div class={`${wrapper.classes} ${className}`} style={wrapper.styles}>
  <!-- svelte-ignore component-name-lowercase -->
  <img {src} {alt} class={image.classes} style={image.styles} />
  {#if !!clip}
    <svelte:component this={clip} className={overlay.classes} />
  {:else}
    <div class={overlay.classes} style={overlay.styles} />
  {/if}
</div>
