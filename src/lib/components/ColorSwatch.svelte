<script lang="ts">
  import { type ColorObject, display } from "colorjs.io/fn";

  let props: { color: ColorObject } = $props();
</script>

<div id="swatch" style:background-color={display(props.color)}></div>

<style>
  #swatch {
    width: 5rem;
    height: 5rem;
  }
</style>
