import React, { useReducer } from 'react'
import { rootReducer } from './reducers'

const initialState = {
  photo: false,
  saturation: {
    contrast: 1,
    saturation: 1,
    brightness: 1
  },
  colorMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
}

const context = React.createContext()

export function Provider(props) {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <context.Provider value={{ state, dispatch }}>
      {props.children}
    </context.Provider>
  )
}

export default context
