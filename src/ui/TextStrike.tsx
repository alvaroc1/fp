import * as React from 'react'

export default (props: {text: string, strike: boolean}) => 
  <span style={{textDecoration: props.strike ? 'line-through' : 'none'}}>{props.text}</span>
