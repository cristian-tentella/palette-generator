<script lang="ts">
  import type { Swatch as SwatchType } from "$lib/domain/palette/types";
  import { swatchesOptions } from "$lib/state/swatchesOptions.svelte";
  import Swatch from "../display/Swatch.svelte";
  
  let { index, swatch }: { index: number, swatch: SwatchType } = $props()
</script>

<div>
    <Swatch {swatch} />
    <button onclick={() => swatchesOptions.splice(index, 1)}>X</button>
</div>