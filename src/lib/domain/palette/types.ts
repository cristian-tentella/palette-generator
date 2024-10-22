import type { ColorObject } from "colorjs.io/fn";

export type Color = ColorObject
export type Swatch = Color[]
export type Palette = Swatch[]

export interface SwatchOptions {
    chroma: number
    hue: number
}
