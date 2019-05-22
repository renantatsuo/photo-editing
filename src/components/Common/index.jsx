import styled from 'styled-components'
import { Slider } from 'antd'

export const PropSlider = styled(Slider)`
  width: 100%;
`

export const SettingsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #f3f3f3;
`

export const fontSize = getComputedStyle(document.querySelector('body'))
  .getPropertyValue('font-size')
  .replace('px', '')
