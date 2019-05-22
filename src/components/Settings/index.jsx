import React, { useContext } from 'react'

import ColorMatrixController from '../ColorMatrixController'
import SaturationController from '../SaturationController'
import { SettingsContainer } from '../Common'
import context from '../../context'
import {
  CHANGE_CONTRAST,
  CHANGE_BRIGHTNESS,
  CHANGE_SATURATION
} from '../../reducers/saturation'
import { CHANGE_COLOR } from '../../reducers/colorMatrix'

const RED_POS = 0
const GREEN_POS = 5
const BLUE_POS = 10

const Settings = ({ disabled }) => {
  const { state, dispatch } = useContext(context)

  const {
    colorMatrix,
    saturation: { contrast, saturation, brightness }
  } = state

  const red = colorMatrix[RED_POS]

  const green = colorMatrix[GREEN_POS]

  const blue = colorMatrix[BLUE_POS]

  const setSatProp = (type) => (value) =>
    dispatch({
      type: type,
      payload: value
    })

  const setColor = (current_matrix, color_position) => (value) =>
    dispatch({
      type: CHANGE_COLOR,
      payload: current_matrix.map((e, i) => (i === color_position ? value : e))
    })

  return (
    <SettingsContainer>
      <SaturationController
        {...{
          contrast,
          setContrast: setSatProp(CHANGE_CONTRAST),
          brightness,
          setBrightness: setSatProp(CHANGE_BRIGHTNESS),
          saturation,
          setSaturation: setSatProp(CHANGE_SATURATION),
          disabled
        }}
      />
      <ColorMatrixController
        {...{
          red,
          setRed: setColor(colorMatrix, RED_POS),
          green,
          setGreen: setColor(colorMatrix, GREEN_POS),
          blue,
          setBlue: setColor(colorMatrix, BLUE_POS),
          disabled
        }}
      />
    </SettingsContainer>
  )
}

export default Settings
