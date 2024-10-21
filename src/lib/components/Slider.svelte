<script lang="ts">
  let {
    name,
    value = $bindable(),
    min,
    max,
  }: {
    name: string;
    value: number;
    min: number;
    max: number;
  } = $props();
</script>

<label for={name}>{name}</label>
<input id={name} {name} type="range" bind:value {min} {max} />
<input type="number" bind:value {min} {max} />
