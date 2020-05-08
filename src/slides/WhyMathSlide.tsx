import * as React from 'react'
import SlideData from '../components/SlideData'
import Stepper from '../components/Stepper'
import Base from '../parts/Base'

const reasons = [
  "It works!",
  "It's simple!",
  "Tools: Laws, Proofs, Methods, etc",
]

export default SlideData.create({
  elements: {
    reasons: Stepper.array(reasons, (v, active) => active && <div>{v}</div>)
  },
  render: elements => 
    <Base title='Why Math?'>

      <div style={{fontSize: 30, lineHeight: 1.8, marginTop: 50, textAlign: 'center'}}>
        {elements.reasons}
      </div>
    </Base>,
  notes: `
    It works: We've been doing math for a VERY LONG time

    It's simple: We're not talking hard stuff here, just basic algebra from junior high.
    And it maps very well to programming.

    Tools: It comes with a lot of tools - laws, identities, etc that we can rely on
  `
})
