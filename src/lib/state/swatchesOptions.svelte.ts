import type { SwatchOptions } from "$lib/domain/palette/types"

export let swatchesOptions: SwatchOptions[] = $state([])

export function addSwatchOptions(newSwatchOptions: SwatchOptions) {
  swatchesOptions.push(newSwatchOptions)
}