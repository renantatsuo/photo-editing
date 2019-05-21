import React from 'react'
import { Typography } from 'antd'

import { SettingsRow, PropSlider } from '../Common'

export default function ColorMatrixController({
  red,
  setRed,
  green,
  setGreen,
  blue,
  setBlue
}) {
  return (
    <>
      <SettingsRow>
        <Typography.Text strong>Red</Typography.Text>
        <Typography.Text style={{ marginLeft: 'auto' }}>
          {(red - 1).toFixed(2)}
        </Typography.Text>
      </SettingsRow>
      <SettingsRow>
        <PropSlider min={0} max={2} onChange={setRed} value={red} step={0.01} />
      </SettingsRow>
      <SettingsRow>
        <Typography.Text strong>Green</Typography.Text>
        <Typography.Text style={{ marginLeft: 'auto' }}>
          {(green - 1).toFixed(2)}
        </Typography.Text>
      </SettingsRow>
      <SettingsRow>
        <PropSlider
          min={0}
          max={2}
          onChange={setGreen}
          value={green}
          step={0.01}
        />
      </SettingsRow>
      <SettingsRow>
        <Typography.Text strong>Blue</Typography.Text>
        <Typography.Text style={{ marginLeft: 'auto' }}>
          {(blue - 1).toFixed(2)}
        </Typography.Text>
      </SettingsRow>
      <SettingsRow>
        <PropSlider
          min={0}
          max={2}
          onChange={setBlue}
          value={blue}
          step={0.01}
        />
      </SettingsRow>
    </>
  )
}
