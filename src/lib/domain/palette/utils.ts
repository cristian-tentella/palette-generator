import { ColorSpace, Lab, LCH, steps, type StepsOptions } from "colorjs.io/fn";
import type { Color, Swatch } from "./types";

let areColorSpacesRegistered = false

function registerColorSpaces() {
    if (!areColorSpacesRegistered) {
        ColorSpace.register(LCH)
        ColorSpace.register(Lab)

        areColorSpacesRegistered = true
    }
}

function makeColor(lightness: number, chroma: number, hue: number): Color {
    return { space: 'lch', coords: [lightness, chroma, hue] }
}

export function makeSwatch(baseLightness: number, targetLightness: number, chroma: number, hue: number, length: number): Swatch {
    registerColorSpaces()

    const baseColor = makeColor(baseLightness, chroma, hue)
    const targetColor = makeColor(targetLightness, chroma, hue)
    const stepsOptions: StepsOptions = {
        space: 'lch',
        outputSpace: 'lch',
        steps: length
    }

    return steps(
        baseColor,
        targetColor,
        stepsOptions
    )
}