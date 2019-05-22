import colorMatrixReducer from './colorMatrix'
import saturationReducer from './saturation'
import photoReducer from './photo'

export const RESET = 'reset'

export const rootReducer = ({ photo, saturation, colorMatrix }, action) => ({
  photo: photoReducer(photo, action),
  saturation: saturationReducer(saturation, action),
  colorMatrix: colorMatrixReducer(colorMatrix, action)
})
