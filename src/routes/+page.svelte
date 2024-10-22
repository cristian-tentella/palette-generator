<script lang="ts">
  import Palette from "$lib/components/domain/display/Palette.svelte";
  import AddSwatch from "$lib/components/domain/interaction/AddSwatch.svelte";
  import PaletteOptions from "$lib/components/domain/interaction/PaletteOptions.svelte";
  import SwatchOptions from "$lib/components/domain/interaction/SwatchOptions.svelte";
</script>

<main>
  <div>
    <PaletteOptions />
    <SwatchOptions />
    <AddSwatch />
  </div>
  <Palette />
</main>

<style>
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
