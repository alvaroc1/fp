import * as React from 'react'
import Slide from '../components/Slide'
import Background from './Background'
import mathbg from 'url:../mathbg.jpg'

interface Props {
  title?: React.ReactNode,
  children: React.ReactNode,
  background?: 'default' | 'math'
}

const h1Styles: React.CSSProperties = {
  fontSize: 50, 
  textAlign: 'center',
  color: '#fc6986'
}

export default (props: Props) => {
  const background = props.background ?? 'default'
  const backgroundComp = 
    background === 'default' ?
    <Background/> :
    <div style={{
      height: '100%',
      background: `linear-gradient(rgba(50,70,150,.8), rgba(50,70,150,.8)), url(${mathbg})`
      }}></div>

  return (
    <Slide background={backgroundComp}>
      {props.title &&
        <h1 style={h1Styles}>{props.title}</h1>
      }
      {props.children}
    </Slide>
  )
}
