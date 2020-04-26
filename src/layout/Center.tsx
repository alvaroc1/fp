import * as React from 'react'

const styles: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

interface Props {
  children: React.ReactNode 
}

export default (props: Props) => 
  <div style={styles}>
    <div>
      {props.children}
    </div>
  </div>