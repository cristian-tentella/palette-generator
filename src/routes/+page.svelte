<script lang="ts">
  import Palette from "$lib/components/domain/display/Palette.svelte";
  import Swatch from "$lib/components/domain/display/Swatch.svelte";
  import AddSwatch from "$lib/components/domain/interaction/AddSwatch.svelte";
  import PaletteOptions from "$lib/components/domain/interaction/PaletteOptions.svelte";
  import SwatchOptions from "$lib/components/domain/interaction/SwatchOptions.svelte";
  import { makeSwatch } from "$lib/domain/palette/utils";
  import { options } from "$lib/state/options.svelte";
  import { swatchesOptions } from "$lib/state/swatchesOptions.svelte";
  import { swatchOptions } from "$lib/state/swatchOptions.svelte";
  
  let swatch = $derived(
    makeSwatch(
      options.baseLightness,
      options.targetLightness,
      swatchOptions.chroma,
      swatchOptions.hue,
      options.rows
    )
  )
</script>

<main>
  <div id="options">
    <PaletteOptions />
    <SwatchOptions />
    <AddSwatch />
    <button onclick={() => swatchesOptions.sort((a, b) => a.hue - b.hue)}>Sort</button>
  </div>
  <div id="palette">
    <Palette />
    <Swatch {swatch} />
  </div>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    gap: 4rem;
  }

  #options {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  #palette {
    display: flex;
    gap: 8rem;
  }
</style>
