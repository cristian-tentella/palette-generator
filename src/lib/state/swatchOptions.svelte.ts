import { lchRanges } from "$lib/domain/palette/constants"
import type { SwatchOptions } from "$lib/domain/palette/types"

export let swatchOptions: SwatchOptions = $state({
    chroma: lchRanges.c.end / 2,
    hue: lchRanges.h.end / 2,
})