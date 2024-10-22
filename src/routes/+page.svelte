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
    padding: 2rem;
    gap: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
</style>
