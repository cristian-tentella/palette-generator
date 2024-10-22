<script lang="ts">
  import { type ColorObject, display } from "colorjs.io/fn";

  let { color }: { color: ColorObject } = $props();
  let colorString: string = $derived(display(color))
</script>

<div id="color" style:background-color={colorString}></div>

<style>
  #color {
    width: 5rem;
    height: 5rem;
  }
</style>
