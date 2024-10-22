<script lang="ts">
  import type { ColorObject } from "colorjs.io/fn";
  import Color from "./Color.svelte";

  let { swatch }: { swatch: ColorObject[] } = $props();
</script>

<div id="swatch">
  {#each swatch as color}
    <Color {color} />
  {/each}
</div>

<style>
  #swatch {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
