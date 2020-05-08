import * as React from 'react'
import SlideData from '../components/SlideData'
import Base from '../parts/Base'
import Snippet from '../components/Snippet'
import { readFileSync } from 'fs'

const code = readFileSync(__dirname + '/../snippets/memoization.sc', 'utf8')

export default SlideData.create({
  elements: {},
  render: _ => 
    <Base title='Memoization'>
      <div style={{padding: '0 50px'}}>
        <p style={{fontSize: 30}}>
          Referential transparency means we can trivially memoize functions
        </p>

        <Snippet 
            fontSize={20}
            code={code} 
            language='scala'/>

        <p style={{fontSize: 30}}>
          A referentially transparent function <em>A => B</em> is equivalent to a <em>Map[A,B]</em>
        </p>
      </div>
    </Base>,
  notes: `
    Referential Transparency
  `
})
