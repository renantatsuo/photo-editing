import { RESET } from './index'

export const LOAD_PHOTO = 'load_photo'

export default function photoReducer(state, { type, payload }) {
  switch (type) {
    case RESET:
      return {
        ...state,
        colorMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      }
    case LOAD_PHOTO:
      return {
        ...state,
        ...payload
      }

    default:
      return state
  }
}
