import * as React from 'react'
import SlideData from '../components/SlideData'
import Base from '../parts/Base'
import Background from '../parts/Background'

export default SlideData.create({
  background: <Background/>,
  elements: {

  },
  render: elements => 
    <Base title='Declarative vs Imperative'>
      <div style={{padding: '0 50px'}}>
        <p style={{fontSize: 30}}>
          Imperative: <em>walks through</em> a sequence of steps.
        </p>
        <p style={{fontSize: 30}}>
          Declarative: <em>describes</em> a sequence of steps.
        </p>

        <h3>Functions</h3>
        <p>
          Normally-impure functions can be made pure by having them output a description of the work
          instead of actually doing the work.
        </p>

        <p>
          A description is data. We are good a dealing with data. 
        </p>
      </div>
    </Base>,
  notes: `

  `
})
