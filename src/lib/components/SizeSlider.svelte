<script lang="ts">
  import Slider from "./Slider.svelte";

  let { size = $bindable() }: { size: number } = $props();
</script>

<Slider name="size" bind:value={size} min={2} max={16} />
