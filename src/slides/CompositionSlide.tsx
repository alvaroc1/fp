import * as React from 'react'
import SlideData from '../components/SlideData'
import Base from '../parts/Base'
import Stepper from '../components/Stepper'
import { readFileSync } from 'fs'
import Snippet from '../components/Snippet'

const codeStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,.4)',
  padding: '10px 20px',
  display: 'inline-block',
  whiteSpace: 'pre'
}

const code = readFileSync(__dirname + '/../snippets/composition.sc', 'utf8')

const options = {
  desc1: 
    <p style={{fontSize: 30}}>
      Take 2 functions and produce a new function that pipes the output of the first 
      function into the input of the second.
    </p>,
  desc2: 
    <p style={{fontSize: 30}}>
      Combining small parts to produce a bigger part.
    </p>,
  commutative: 
    <div style={{fontSize: 30}}>
      <h3>Commutative Property</h3>
      <code style={codeStyle}>
        (a + b) = (b + a)
      </code>
    </div>,
  associative:
    <div style={{fontSize: 30}}>
      <h3>Associative Property</h3>
      <code style={codeStyle}>
        (a + b) + c = a + (b + c)
      </code>
    </div>,
  code:
    <div style={{fontSize: 30}}>
      <Snippet
        language='scala'
        code={code} />
    </div>,
}

export default SlideData.create({
  elements: {
    values: Stepper.states(Object.keys(options) as any as Array<keyof typeof options>, (v, active) => 
      active && options[v]
    )
  },
  render: elements => 
    <Base title='Composition'>
      <div style={{padding: '0 50px', textAlign: 'center'}}>
        {elements.values}
      </div>
    </Base>,
  notes: `
    Composition

    Here we can mean a very precise meaning: Create a new function that pipes the
    output of one function into the input of another.

    Or we can refer to idea of combining small pieces of logic to create bigger pieces of logic.

    There are certain rules that govern how composition works and guarantee being able
    to safely re-arrenge one expression into another while maintaining the same functionality.

    It is similar how in math we have properties that guarantee equality in the presence of 
    certain changes. Remember the Cummutative Prop, the Associative Prop, the Identities?
  `
})
