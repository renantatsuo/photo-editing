import React from 'react'
import { Typography } from 'antd'

import { SettingsRow, PropSlider } from '../Common'

const SaturationController = ({
  contrast,
  setContrast,
  brightness,
  setBrightness,
  saturation,
  setSaturation,
  disabled
}) => {
  return (
    <>
      <SettingsRow>
        <Typography.Text strong>Contrast</Typography.Text>
        <Typography.Text style={{ marginLeft: 'auto' }}>
          {(contrast - 1).toFixed(2)}
        </Typography.Text>
      </SettingsRow>
      <SettingsRow>
        <PropSlider
          disabled={disabled}
          min={0}
          max={2}
          onChange={setContrast}
          value={contrast}
          step={0.01}
        />
      </SettingsRow>
      <SettingsRow>
        <Typography.Text strong>Brightness</Typography.Text>
        <Typography.Text style={{ marginLeft: 'auto' }}>
          {(brightness - 1).toFixed(2)}
        </Typography.Text>
      </SettingsRow>
      <SettingsRow>
        <PropSlider
          disabled={disabled}
          min={0}
          max={2}
          onChange={setBrightness}
          value={brightness}
          step={0.01}
        />
      </SettingsRow>
      <SettingsRow>
        <Typography.Text strong>Saturation</Typography.Text>
        <Typography.Text style={{ marginLeft: 'auto' }}>
          {(saturation - 1).toFixed(2)}
        </Typography.Text>
      </SettingsRow>
      <SettingsRow>
        <PropSlider
          disabled={disabled}
          min={0}
          max={2}
          onChange={setSaturation}
          value={saturation}
          step={0.01}
        />
      </SettingsRow>
    </>
  )
}

export default SaturationController
