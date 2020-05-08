import * as React from 'react'
import SlideData from '../components/SlideData'
import Base from '../parts/Base'
import Stepper from '../components/Stepper'

export default SlideData.create({
  elements: {
    done: Stepper.array(
      [true], (_, active, past) => 
        active && !past && <p style={{fontSize: 50}}>That's It!</p>
    ),
    values: Stepper.array(
      [
        'No mocking necessary',
        'No checking exceptions',
        'No dealing with concurrency'
      ],
      (v, active) => active && <div>{v}</div>
    )
  },
  render: elements => 
    <Base title='Testability'>
      <div style={{padding: '0 50px', textAlign: 'center'}}>
        <p style={{fontSize: 30}}>
          Check that the output matches what's expected given a particular input. 
        </p>

        {elements.done}

        <div style={{fontSize: 34, lineHeight: 1.8, marginTop: 50}}>
          {elements.values}
        </div>
      </div>
    </Base>,
  notes: `
  Functions are easy to test:
  `
})
