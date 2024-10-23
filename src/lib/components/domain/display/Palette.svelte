<script lang="ts">
  import type { Palette } from "$lib/domain/palette/types";
  import { makeSwatch } from "$lib/domain/palette/utils";
  import { options } from "$lib/state/options.svelte";
  import { swatchesOptions } from "$lib/state/swatchesOptions.svelte";
  import EditableSwatch from "../interaction/EditableSwatch.svelte";
  
  let palette: Palette = $derived(swatchesOptions.map(
    it => {
      const { chroma, hue } = it
      
      return makeSwatch(
        options.baseLightness,
        options.targetLightness,
        chroma,
        hue,
        options.rows
      )
    }
  ))
</script>

<div id="container">
  <div id="palette">
    {#each palette as swatch, index}
      <EditableSwatch {index} {swatch} />
    {/each}
  </div>
</div>

<style>
  #container {
    display: flex;
    flex-direction: row;  
    gap: 6rem;
  }

  #palette {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }
</style>
