<script lang="ts">
  import ColorSwatch from "./ColorSwatch.svelte";
  import { makeLCHColorScale } from "$lib/ts/color";

  let props: { chroma: number; hue: number; size: number } = $props();

  let scale = $derived(makeLCHColorScale(props.chroma, props.hue, props.size));
</script>

<div id="scale">
  {#each scale as color}
    <ColorSwatch {color} />
  {/each}
</div>

<style>
  #scale {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
