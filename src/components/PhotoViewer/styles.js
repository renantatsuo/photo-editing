import styled from 'styled-components'

export const PhotoContainer = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => (props.black ? '#000000' : 'rgba(0, 0, 0, 0.20)')};
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;

  .ant-upload.ant-upload-drag {
    background: transparent;
    border: none;

    .ant-upload-btn {
      h1,
      span,
      p {
        color: #ffffff;
      }

      .ant-upload-drag-icon i {
        color: #bc4bed;
        font-size: 5rem;
      }

      .ant-btn {
        background: #bc4bed;
        border: none;
        padding: 1rem;
        width: 100%;
        height: auto;
        font-size: 1.1rem;
      }
    }
  }
`
