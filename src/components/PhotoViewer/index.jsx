import React, { useContext } from 'react'
import { Surface } from 'gl-react-dom'

import context from '../../context'
import { LOAD_PHOTO } from '../../reducers/photo'

import Saturate from '../../shaders/Saturate'
import ColorMatrix from '../../shaders/ColorMatrix'
import UploadPhoto from '../UploadPhoto'
import { PhotoContainer } from './styles'

const PhotoViewer = () => {
  const { state, dispatch } = useContext(context)

  const {
    colorMatrix,
    photo: { url, height, width },
    saturation: { contrast, saturation, brightness }
  } = state

  const setPhoto = (photo) => {
    dispatch({
      type: LOAD_PHOTO,
      payload: photo
    })
  }

  const saturationOptions = {
    contrast,
    saturation,
    brightness
  }

  return (
    <PhotoContainer black={!!state.photo}>
      {!state.photo ? (
        <UploadPhoto setPhoto={setPhoto} />
      ) : (
        <Surface {...{ height, width }}>
          <ColorMatrix colors={colorMatrix}>
            <Saturate {...saturationOptions}>{url}</Saturate>
          </ColorMatrix>
        </Surface>
      )}
    </PhotoContainer>
  )
}

export default PhotoViewer
