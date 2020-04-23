import * as React from 'react'
import Slide from '../components/Slide'
import Base from '../parts/Base'
import Background from '../parts/Background'
import Stepper from '../components/Stepper'
import { readFileSync } from 'fs'
import Snippet from '../components/Snippet'
import { stripIndent } from 'common-tags'

const codeStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,.4)',
  padding: '10px 20px',
  display: 'inline-block',
  whiteSpace: 'pre'
}

export default Slide.create({
  background: <Background/>,
  elements: {
    values: Stepper.states([
      'desc', 
      'substitution',
      /*
      'commutative', 
      'associative', 
      */
      'code1', 
      'code2', 
      'code3', 
      'code4'
    ], (v, active, past) => 
      active && ({
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
              code={readFileSync(__dirname + '/../snippets/substitution1.sc', 'utf8')}  />
          </div>,
        code2: 
          <div style={{fontSize: 30}}>
            <h3>Substitution</h3>
            <Snippet
              language='scala'
              code={readFileSync(__dirname + '/../snippets/substitution2.sc', 'utf8')}  />

          </div>,
        code3: 
          <div style={{fontSize: 30}}>
            <h3>Substitution</h3>
            <Snippet
              language='scala'
              code={readFileSync(__dirname + '/../snippets/substitution3.sc', 'utf8')}  />
          </div>,
        code4: 
          <div style={{fontSize: 30}}>
            <h3>Substitution</h3>
            <Snippet
              language='scala'
              code={readFileSync(__dirname + '/../snippets/substitution4.sc', 'utf8')}  />
          </div>,
      })[v]
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
