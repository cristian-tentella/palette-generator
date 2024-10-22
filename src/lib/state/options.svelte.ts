import { lchRanges } from "$lib/domain/palette/constants"

interface Options {
    rows: number
    baseLightness: number
    targetLightness: number
}

export let options: Options = $state({
    rows: 4,
    baseLightness: lchRanges.l.start,
    targetLightness: lchRanges.l.end
})