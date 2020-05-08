import * as React from 'react'
import SlideData from '../components/SlideData'
import Base from '../parts/Base'
import Stepper from '../components/Stepper'
import Snippet from '../components/Snippet'
import { readFileSync } from 'fs'

const badCode = readFileSync(__dirname + '/../snippets/purity-bad.sc', 'utf8')
const goodCode1 = readFileSync(__dirname + '/../snippets/purity-good1.sc', 'utf8')
const goodCode2 = readFileSync(__dirname + '/../snippets/purity-good2.sc', 'utf8')

const options = {
  bad:
    <Snippet 
      fontSize={26}
      code={badCode} 
      language='scala'/>,
  good1:  
    <Snippet 
      fontSize={26}
      code={goodCode1} 
      language='scala'/>,
  good2:  
    <Snippet 
      fontSize={26}
      code={goodCode2} 
      language='scala'/>
}

export default SlideData.create({
  elements: {
    values: Stepper.array([
      'No writing to file',
      'No displaying stuff on the screen',
      'No updating something outside the function',
    ], (v, active, past) => active && !past && <div>{v}</div>),
    code: Stepper.states(Object.keys(options) as any as Array<keyof typeof options>, (v, active) => 
      active && ({
        bad:
          <Snippet 
            fontSize={26}
            code={badCode} 
            language='scala'/>,
        good1:  
          <Snippet 
            fontSize={26}
            code={goodCode1} 
            language='scala'/>,
        good2:  
          <Snippet 
            fontSize={26}
            code={goodCode2} 
            language='scala'/>
      })[v]
    )
  },
  render: elements => 
    <Base title='Purity'>
      <div style={{textAlign: 'center'}}>
        <h2>Function's only effect must be the computation of its return value</h2>
        <div style={{fontSize: 32, lineHeight: 1.8, marginTop: 50}}>
          {elements.values}
        </div>

        <div style={{padding: '0 50px'}}>
          {elements.code}
        </div>
      </div>
    </Base>,
  notes: `
    No side-effects!

    No writing to file: No logging, No saving your work - That's a side effect

    No displaying stuff on screen: No canvas.drawLine(...)

    No outside udpates: No counters, No database inserts/updates

    You can't make impure code into pure code.
  `
})
