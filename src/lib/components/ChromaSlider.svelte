<script lang="ts">
  import { maxLCHChroma, minLCHChroma } from "$lib/ts/color";
  import Slider from "./Slider.svelte";

  let { chroma = $bindable() }: { chroma: number } = $props();
</script>

<Slider
  name="chroma"
  bind:value={chroma}
  min={minLCHChroma}
  max={maxLCHChroma}
/>
