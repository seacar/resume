import React, { Component } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'


class Background extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return 
    <>
        <Helmet>
        <script src="three.min.js"></script>
        <script src="vanta.waves.min.js"></script>
        </Helmet>
        <div ref={this.vantaRef}>
        Foreground content goes here
        </div>
    </>
  }
}

export default Background;