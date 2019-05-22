import { RESET } from './index'

export const CHANGE_COLOR = 'change_color'

export default function colorMatrixReducer(state, { type, payload }) {
  switch (type) {
    case RESET:
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

    case CHANGE_COLOR:
      return payload

    default:
      return state
  }
}
