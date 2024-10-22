<script lang="ts">
  let {
    name,
    displayName,
    value = $bindable(),
    min,
    max,
  }: {
    name: string;
    displayName: string;
    value: number;
    min: number;
    max: number;
  } = $props();
</script>

<div>
  <label for={name}>{displayName}</label>
  <input id={name} {name} type="range" bind:value {min} {max} />
  <input type="number" bind:value {min} {max} />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
