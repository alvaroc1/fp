import * as React from 'react'

const color1 = 'rgb(30, 40, 82)'
const color2 = 'rgb(35, 45, 87)'
const shadow = 'rgba(0,0,0,.2)'
const angle = '25deg'

const curtainStyles: React.CSSProperties = {
  position: 'absolute',
  top: -350,
  height: 1250,
  width: 900,
  boxShadow: `0 0 100px ${shadow}`,
  background: color1
}

export default () => 
  <div style={{position: 'relative', height: '100%', background: color1, overflow: 'hidden'}}>
    <div 
      style={{
      ...curtainStyles,
      right: 380,
      borderRight: `140px solid ${color2}`,
      transform: `rotate(${angle})`
    }}></div>

    <div 
      style={{
      ...curtainStyles,
      left: 380,
      borderLeft: `160px solid ${color2}`,
      transform: `rotate(-${angle})`
    }}></div>
  </div>