<script lang="ts">
  import type { Snippet } from "svelte";
  import ColorScale from "./ColorScale.svelte";
  
  let props: { children: Snippet, chroma: number, hues: number[], scaleSize: number } = $props()
</script>

<div id="container">
  <div id="table">
    {#each props.hues as hue}
      <ColorScale chroma={props.chroma} hue={hue} size={props.scaleSize} />
    {/each}
  </div>

  {@render props.children()}
</div>

<style>
  #container {
    display: flex;
    flex-direction: row;  
    gap: 6rem;
  }

  #table {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }
</style>
