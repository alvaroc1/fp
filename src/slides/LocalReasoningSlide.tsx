import * as React from 'react'
import SlideData from '../components/SlideData'
import Base from '../parts/Base'
import Background from '../parts/Background'

export default SlideData.create({
  background: <Background/>,
  elements: {

  },
  render: elements => 
    <Base title='Local Reasoning'>
      <div style={{padding: '0 50px'}}>
        <p style={{fontSize: 30}}>
          Correctness can be inferred locally under specified assumptions, 
          without considering prior application state
        </p>
      </div>
    </Base>
})