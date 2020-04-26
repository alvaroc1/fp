import * as React from 'react'
import SlideData from '../components/SlideData'
import Base from '../parts/Base'
import Background from '../parts/Background'

export default SlideData.create({
  background: <Background/>,
  elements: {

  },
  render: elements => 
    <Base title={<>Pure on the Inside<br/> Impure at the edges</>}>
      <div style={{padding: '0 50px'}}>
        <p style={{fontSize: 30}}>

        </p>
      </div>
    </Base>,
  notes: `
  `
})
