import * as React from 'react'
import SlideData from '../components/SlideData'
import Center from '../layout/Center'
import Quote from '../ui/Quote'
import Base from '../parts/Base'
import 'typeface-roboto'
import 'typeface-montserrat'

export default SlideData.create({
  elements: {},
  render: () => 
    <Base>
      <Center>
        <Quote author='@djspiewak'>
          The only requirement for FP is an earnest desire to write 
          software that is more <em>testable</em>, more <em>composable</em>, and <em>easier 
          to understand and maintain</em>.
        </Quote>
      </Center>
    </Base>,
  notes: `
    The goal here is testable, composable, understandable, and maintainable code.
    
  `
})
