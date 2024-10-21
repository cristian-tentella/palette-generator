<script lang="ts">
  import { maxLCHHue, minLCHHue } from "$lib/ts/color";
  import Slider from "./Slider.svelte";

  let { hue = $bindable() }: { hue: number } = $props();
</script>

<Slider name="hue" bind:value={hue} min={minLCHHue} max={maxLCHHue} />
