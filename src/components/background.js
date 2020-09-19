import React, { Component } from 'react'
import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min'


class Background extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
        el: this.vantaRef.current,
        THREE: THREE // use a custom THREE when initializing
      })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div height="100vh" ref={this.vantaRef}></div>
  }
}

export default Background;