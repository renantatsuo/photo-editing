import { RESET } from './index'

export const CHANGE_BRIGHTNESS = 'change_brightness'
export const CHANGE_CONTRAST = 'change_contrast'
export const CHANGE_SATURATION = 'change_saturation'

export default function saturationReducer(state, { type, payload }) {
  switch (type) {
    case RESET:
      return {
        ...state,
        colorMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      }

    case CHANGE_CONTRAST:
      return {
        ...state,
        contrast: payload
      }

    case CHANGE_BRIGHTNESS:
      return {
        ...state,
        brightness: payload
      }

    case CHANGE_SATURATION:
      return {
        ...state,
        saturation: payload
      }

    default:
      return state
  }
}
