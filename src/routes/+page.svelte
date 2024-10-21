<script lang="ts">
  import ChromaSlider from "$lib/components/ChromaSlider.svelte";
  import ColorScale from "$lib/components/ColorScale.svelte";
  import ColorTable from "$lib/components/ColorTable.svelte";
  import HueSlider from "$lib/components/HueSlider.svelte";
  import SizeSlider from "$lib/components/SizeSlider.svelte";
  import { registerColorSpaces } from "$lib/ts/color";

  registerColorSpaces();

  let scaleSize: number = $state(4);
  let chroma: number = $state(50);
  let hue: number = $state(0);
  let hues: number[] = $state([]);

  function handleAddHue() {
    if (!hues.includes(hue)) {
      hues.push(hue);
    }
  }
</script>

<main>
  <SizeSlider bind:size={scaleSize} />
  <ChromaSlider bind:chroma={chroma} />
  <HueSlider bind:hue={hue} />
  
  <button onclick={handleAddHue}>Add scale</button>

  <ColorTable {chroma} {hues} {scaleSize}>
    <ColorScale {chroma} {hue} size={scaleSize} />
  </ColorTable>
</main>
