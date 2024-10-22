<script lang="ts">
  import Slider from "$lib/components/common/Slider.svelte";
  import { lchRanges } from "$lib/domain/palette/constants";
  import { swatchOptions } from "$lib/state/swatchOptions.svelte";
</script>

<div>
  <Slider
    name="chroma"
    displayName="Chroma"
    bind:value={swatchOptions.chroma}
    min={lchRanges.c.start}
    max={lchRanges.c.end}
  />

  <Slider
    name="hue"
    displayName="Hue"
    bind:value={swatchOptions.hue}
    min={lchRanges.h.start}
    max={lchRanges.h.end}
  />
</div>

<style>
  div {
    display: flex;
    gap: 2rem;
  }
</style>