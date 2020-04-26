import * as React from 'react'
import SlideData from '../components/SlideData'
import Background from '../parts/Background'
import Stepper from '../components/Stepper'
import Base from '../parts/Base'

export default SlideData.create({
  background: <Background/>,
  elements: {
    func: Stepper.show(<h1 style={{fontSize: 80, lineHeight: 2.2}}>Input → Output</h1>),
    mfunc: Stepper.show(<h2 style={{fontSize: 50}}>f(x) = x<sup>2</sup></h2>)
  },
  render: elements => 
    <Base title='Function'>
      <div style={{textAlign: 'center'}}>
        {elements.func}

        {elements.mfunc}
      </div>
    </Base>,
  notes: `
    So what is a function? Not talking about programming here, but a math function.

    It is a mapping from every element of one set, to exactly one element on another set.

    Input -> Output

    Domain -> Codomain

    You know, f(x)
  `
})
