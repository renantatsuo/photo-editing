import styled from 'styled-components'
import { Card } from 'antd'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2efea;
  flex: 1;
  padding: 2rem 20%;
`

export const SettingsCard = styled(Card)`
  > .ant-card-cover {
    background: #000000;
    height: 500px;
  }
`

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`
