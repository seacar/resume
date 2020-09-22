import React, { Component } from 'react'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'


import styled from "@emotion/styled"

const Container = styled.div `
  width: 100%;
  height: 100vh;
  z-index: -100;
  text-align: center;
`


class Background extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
        el: this.vantaRef.current,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x663399,
        shininess: 20.00,
        waveHeight: 25.00,
        waveSpeed: 1.2,
        zoom: 0.8,
        THREE: THREE // use a custom THREE when initializing
      })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return (
        <>
            <Container ref={this.vantaRef}>
                
            </Container>
        </>
    )
  }
}

export default Background;