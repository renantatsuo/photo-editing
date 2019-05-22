import React from 'react'
import { Upload, Icon, Typography, Divider, Button } from 'antd'

import { fontSize } from '../Common'

const UploadPhoto = ({ setPhoto }) => {
  const handleUpload = ({ file }) => {
    let formData = new FormData()

    formData.append('image', file)

    fetch('http://www.mocky.io/v2/5ce597692e00001272f83ecd', {
      method: 'post',
      body: formData
    })
      .then((res) => res.json())
      .then(({ data }) => {
        let ratio = data.width / data.height
        let height = window.innerHeight - 8 * fontSize
        let width = height * ratio

        if (width > window.innerWidth * 0.7 * 0.7) {
          width = window.innerWidth * 0.7 * 0.7
          height = width / ratio
        }

        setPhoto({
          url: data.link,
          height: height,
          width: width
        })
      })
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
