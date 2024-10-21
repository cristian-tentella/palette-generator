import { ColorSpace, Lab, LCH, steps, type ColorObject } from 'colorjs.io/fn'

function registerColorSpaces() {
    ColorSpace.register(LCH)
    ColorSpace.register(Lab)
}

const minLCHLightness = 0;
const maxLCHLightness = 100;
const minLCHChroma = 0;
const maxLCHChroma = 150;
const minLCHHue = 0;
const maxLCHHue = 360;

function makeLCH(lightness: number, chroma: number, hue: number): ColorObject {
    return { space: "lch", coords: [lightness, chroma, hue] }
}

function makeMinLightnessLCH(chroma: number, hue: number): ColorObject {
    return makeLCH(minLCHLightness, chroma, hue)
}

function makeMaxLightnessLCH(chroma: number, hue: number): ColorObject {
    return makeLCH(maxLCHLightness, chroma, hue)
}

function makeLCHColorScale(chroma: number, hue: number, lenght: number): ColorObject[] {
    return steps(makeMinLightnessLCH(chroma, hue), makeMaxLightnessLCH(chroma, hue), {
        space: 'lch',
        outputSpace: 'lch',
        steps: lenght
    })
}

export {
    registerColorSpaces,
    makeLCHColorScale,
    minLCHHue,
    maxLCHHue,
    minLCHChroma,
    maxLCHChroma
}