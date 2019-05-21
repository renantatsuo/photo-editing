import React from 'react'
import { Shaders, Node, GLSL } from 'gl-react'

const shader = Shaders.create({
  ColorMatrix: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D t;
    uniform mat4 colors;

    void main() {
      gl_FragColor = colors * texture2D(t, uv);
    }
    `
  }
})

export const ColorMatrix = ({ colors, children }) => (
  <Node shader={shader.ColorMatrix} uniforms={{ colors, t: children }} />
)

export default ColorMatrix
