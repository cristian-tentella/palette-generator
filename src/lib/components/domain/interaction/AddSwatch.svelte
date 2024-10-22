<script lang="ts">
  import { addSwatchOptions } from "$lib/state/swatchesOptions.svelte";
  import { swatchOptions } from "$lib/state/swatchOptions.svelte";

  function addSwatchToPalette() {
    addSwatchOptions($state.snapshot(swatchOptions))
  }
</script>

<div>
  <button onclick={addSwatchToPalette}>Add new swatch</button>
</div>