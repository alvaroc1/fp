import * as React from 'react'
import Slide from '../components/Slide'
import Base from '../parts/Base'
import Background from '../parts/Background'
import Snippet from '../components/Snippet'
import { readFileSync } from 'fs'

export default Slide.create({
  background: <Background/>,
  elements: {

  },
  render: elements => 
    <Base title='Memoization'>
      <div style={{padding: '0 50px'}}>
        <p style={{fontSize: 30}}>
          Referential transparency means we can trivially memoize functions
        </p>

        <Snippet 
            fontSize={20}
            code={readFileSync(__dirname + '/../snippets/memoization.sc', 'utf8')} 
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
