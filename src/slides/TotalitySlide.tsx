import * as React from 'react'
import SlideData from '../components/SlideData'
import Background from '../parts/Background'
import Stepper from '../components/Stepper'
import Snippet from '../components/Snippet'
import { readFileSync } from 'fs'
import Base from '../parts/Base'

export default SlideData.create({
  background: <Background/>,
  elements: {
    code: Stepper.states(['desc', 'code-bad', 'code-good', 'code-good2', 'code-good3'], (value, active) => {
      return active && (() => {switch (value) {
        case 'desc': return (
          <h1>
          No Exceptions!
          </h1>
        )
        case 'code-bad': return (
          <Snippet 
            code={readFileSync(__dirname + '/../snippets/totality-bad.sc', 'utf8')} 
            language='scala'/>
        )
        case 'code-good': return (
          <Snippet 
            code={readFileSync(__dirname + '/../snippets/totality-good.sc', 'utf8')} 
            language='scala'/>
        )
        case 'code-good2': return (
          <Snippet 
            code={readFileSync(__dirname + '/../snippets/totality-good2.sc', 'utf8')} 
            language='scala'/>
        )
        case 'code-good3': return (
          <Snippet 
            code={readFileSync(__dirname + '/../snippets/totality-good3.sc', 'utf8')} 
            language='scala'/>
        )
      }})()
    })
  },
  render: elements => <Base title='Totality'>
    <div style={{textAlign: 'center'}}>
      <h2>Function must yield a value for every possible input</h2>
      <div style={{padding: 50}}>
        {elements.code}
      </div>
    </div>
  </Base>,
  notes: `
    So what does that mean?
    
    No Exceptions!
  `
})
