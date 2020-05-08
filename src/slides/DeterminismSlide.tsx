import * as React from 'react'
import SlideData from '../components/SlideData'
import Base from '../parts/Base'
import Stepper from '../components/Stepper'
import Snippet from '../components/Snippet'
import { readFileSync } from 'fs'

const badCode = readFileSync(__dirname + '/../snippets/determinism-bad.sc', 'utf8')
const goodCode = readFileSync(__dirname + '/../snippets/determinism-good.sc', 'utf8')

export default SlideData.create({
  elements: {
    values: Stepper.array([
      'No Randomness',
      'No Time?',
      'No Database Lookup?'
    ], (value, active, past) => active && !past && <div>{value}</div>),
    codes: Stepper.states(['bad', 'good'], (value, active) => 
      active && (
        value === 'bad' ?
          <Snippet 
            fontSize={24}
            code={badCode} 
            language='scala'/> :
          <Snippet 
            fontSize={24}
            code={goodCode} 
            language='scala'/> 
      )
    )
  },
  render: elements => 
    <Base title='Determinism'>
      <div style={{textAlign: 'center'}}>
        <h2>Function must yield the same value for the same input</h2>
        <div style={{fontSize: 30, lineHeight: 1.8, marginTop: 50}}>
          <div style={{height: 0}}>
            {elements.values}
          </div>
          <div style={{padding: '30px 100px'}}>
            {elements.codes}
          </div>
        </div>
      </div>
    </Base>
})
