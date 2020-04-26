import * as React from 'react'
import SlideData from '../components/SlideData'
import Base from '../parts/Base'
import Background from '../parts/Background'

export default SlideData.create({
  background: <Background/>,
  elements: {

  },
  render: elements => 
    <Base title='Islands of Purity'>
      <div style={{padding: '0 50px'}}>
        <p style={{fontSize: 30}}>
          An expression may be replaced by the value it computes without changing 
          the behavior of the program
        </p>
      </div>
    </Base>,
  notes: `
    Referential Transparency
  `
})
