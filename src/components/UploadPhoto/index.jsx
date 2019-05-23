import React from 'react'
import { Upload, Icon, Typography, Divider, Button } from 'antd'

import { fontSize } from '../Common'

const UploadPhoto = ({ setPhoto }) => {
  const handleUpload = ({ file }) => {
    const blob = URL.createObjectURL(file)

    const img = new Image()

    img.src = blob

    img.onload = function() {
      let ratio = this.width / this.height
      let height = window.innerHeight - 8 * fontSize
      let width = height * ratio

      if (width > window.innerWidth * 0.7 * 0.7) {
        width = window.innerWidth * 0.7 * 0.7
        height = width / ratio
      }

      setPhoto({
        url: URL.createObjectURL(file),
        height: height,
        width: width
      })
    }
  }
  return (
    <Upload.Dragger customRequest={handleUpload}>
      <p className='ant-upload-drag-icon'>
        <Icon type='inbox' />
      </p>
      <Typography.Title className='ant-upload-text'>
        Drag and Drop
      </Typography.Title>
      <Divider> OR </Divider>
      <Button>Click to Upload</Button>
    </Upload.Dragger>
  )
}

export default UploadPhoto
