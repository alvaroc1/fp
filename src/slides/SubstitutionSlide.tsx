import * as React from 'react'
import SlideData from '../components/SlideData'
import Base from '../parts/Base'
import Stepper from '../components/Stepper'
import { readFileSync } from 'fs'
import Snippet from '../components/Snippet'
import { stripIndent } from 'common-tags'

const code1 = readFileSync(__dirname + '/../snippets/substitution1.sc', 'utf8')
const code2 = readFileSync(__dirname + '/../snippets/substitution2.sc', 'utf8')
const code3 = readFileSync(__dirname + '/../snippets/substitution3.sc', 'utf8')
const code4 = readFileSync(__dirname + '/../snippets/substitution4.sc', 'utf8')

const codeStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,.4)',
  padding: '10px 20px',
  display: 'inline-block',
  whiteSpace: 'pre'
}

const options = {
  desc: 
    <div style={{fontSize: 30}}>
      <p>
        An expression may be replaced by the value it computes without changing 
        the behavior of the program
      </p>
    </div>,
  substitution: 
    <div style={{fontSize: 30}}>
      <h3>Substitution</h3>
      <code style={codeStyle}>{stripIndent`
        2 * 3 + 4
          6   + 4
            10
      `}</code>
    </div>,

  code1: 
    <div style={{fontSize: 30}}>
      <h3>Substitution</h3>
      <Snippet
        language='scala'
        code={code1}  />
    </div>,
  code2: 
    <div style={{fontSize: 30}}>
      <h3>Substitution</h3>
      <Snippet
        language='scala'
        code={code2}  />

    </div>,
  code3: 
    <div style={{fontSize: 30}}>
      <h3>Substitution</h3>
      <Snippet
        language='scala'
        code={code3}  />
    </div>,
  code4: 
    <div style={{fontSize: 30}}>
      <h3>Substitution</h3>
      <Snippet
        language='scala'
        code={code4}  />
    </div>,
}

export default SlideData.create({
  elements: {
    values: Stepper.objectStates(
      options, 
      (v, active) => active && v
    )
  },
  render: elements => 
    <Base title='Referential Transparency'>
      <div style={{padding: '0 50px', textAlign: 'center'}}>
        {elements.values}
      </div>
    </Base>,
  notes: `
    Referential Transparency

    This is called substitution in algebra.

    They allow us to substitute one expression for an equivalent one. 
    It makes easy for us to re-arrange expressions in an equation to
    in order simplify the equation.
  `
})
