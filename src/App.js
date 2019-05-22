import React, { useContext } from 'react'

import { Container } from './styles'
import PhotoViewer from './components/PhotoViewer'
import Settings from './components/Settings'
import context from './context'

const App = () => {
  const { state } = useContext(context)

  return (
    <Container>
      <PhotoViewer />
      <Settings disabled={!state.photo} />
    </Container>
  )
}

export default App
