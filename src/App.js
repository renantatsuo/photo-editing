import React, { useState } from 'react'
import { Surface } from 'gl-react-dom'
import { Typography } from 'antd'
import * as exif from 'blueimp-load-image'

import Saturate from './shaders/Saturate'
import ColorMatrix from './shaders/ColorMatrix'

import { Container, SettingsCard, SettingsContainer } from './styles'
import ColorMatrixController from './components/ColorMatrixController'
import SaturationController from './components/SaturationController'
import photo from './assets/photo.jpg'

export default function App() {
  const [pic, setPic] = useState(false)
  const [contrast, setContrast] = useState(1.0)
  const [saturation, setSaturation] = useState(1)
  const [brightness, setBrightness] = useState(1)

  const [red, setRed] = useState(1)
  const [green, setGreen] = useState(1)
  const [blue, setBlue] = useState(1)

  if (!pic) {
    exif(photo, setPic, { maxHeight: 500, maxWidth: 800 })
  }

  const picOptions = {
    height: pic.height,
    width: pic.width
  }

  const saturationOptions = {
    contrast,
    saturation,
    brightness
  }

  const colorsMatrix = [red, 0, 0, 0, 0, green, 0, 0, 0, 0, blue, 0, 0, 0, 0, 1]

  return (
    <Container>
      <Typography.Title>Image Filtering</Typography.Title>
      <SettingsCard
        style={{ width: 800, textAlign: 'center' }}
        cover={
          pic ? (
            <Surface
              {...picOptions}
              pixelRatio={
                window.devicePixelRatio < 4 ? 4 : window.devicePixelRatio
              }
            >
              <ColorMatrix colors={colorsMatrix}>
                <Saturate {...saturationOptions}>{photo}</Saturate>
              </ColorMatrix>
            </Surface>
          ) : (
            ''
          )
        }
      >
        <SettingsContainer>
          <SaturationController
            {...{
              contrast,
              setContrast,
              brightness,
              setBrightness,
              saturation,
              setSaturation
            }}
          />
          <ColorMatrixController
            {...{ red, setRed, green, setGreen, blue, setBlue }}
          />
        </SettingsContainer>
      </SettingsCard>
    </Container>
  )
}
