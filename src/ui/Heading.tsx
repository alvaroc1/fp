import * as React from 'react'

const styles: React.CSSProperties = {
  fontSize: 50, 
  textAlign: 'center',
  color: '#fc6986'
}

interface Props {
  children: React.ReactNode
}

export default (props: Props) =>
  <h1 style={styles}>{props.children}</h1>
  