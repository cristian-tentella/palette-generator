<script lang="ts">
  import Slider from "$lib/components/common/Slider.svelte";
  import { lchRanges } from "$lib/domain/palette/constants";
  import { options } from "$lib/state/options.svelte";
</script>

<div>
  <Slider
    name="rows"
    displayName="Rows"
    bind:value={options.rows}
    min={2}
    max={16}
  />
  <Slider
    name="base-lightness"
    displayName="Base Lightness"
    bind:value={options.baseLightness}
    min={lchRanges.l.start}
    max={lchRanges.l.end}
  />
  <Slider
    name="target-lightness"
    displayName="Target Lightness"
    bind:value={options.targetLightness}
    min={lchRanges.l.start}
    max={lchRanges.l.end}
  />
</div>

<style>
  div {
    display: flex;
    gap: 2rem;
  }
</style>