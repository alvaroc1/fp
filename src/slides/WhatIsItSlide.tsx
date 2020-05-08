import * as React from 'react'
import SlideData from "../components/SlideData"
import Stepper from "../components/Stepper"
import Center from '../layout/Center'
import TextStrike from '../ui/TextStrike'
import Base from '../parts/Base'

const possibilities = [
  'First-class Functions?',
  'Immutability?',
  'Type Safety?',
  'Category Theory?',
  'Beautiful Code?'
]

export default SlideData.create({
  elements: {
    possible: Stepper.arrayStates(possibilities, [false, true], (v, crossed, active) => 
      active && <div><TextStrike strike={crossed} text={v}/></div>
    )
  },
  render: elements => 
    <Base title='What is it?'>
      <div style={{height: 350}}>
        <Center>
          <div style={{fontSize: 35, lineHeight: 1.9}}>
            {elements.possible}
          </div>
        </Center>
      </div>
    </Base>,
  notes: `
    My goal is to give functional programming a very precise definition.

    * First-class functions: that's a requirement, and it's part of it, but it's not what is about.
      We're trying to get to a more precise definition.
    * Immutability: NOPE, typically we end up with a lot of immutability, but that's more of
      a nice side benefit, not a requirement
    * Type safety: It's great, and helps prevent bugs, and mixes really nicely with FP,
      but not what FP is about
    * Category Theory: Semigroups, Monoids, Functors, Applicatives, etc. They are useful
      for providing a terminology for what we already do. Not really the heart of FP.
    * Beautiful code: We are engineers, not sculptors. We are here to solve
    problems, not to express our hopes and desires through code.
  `
})