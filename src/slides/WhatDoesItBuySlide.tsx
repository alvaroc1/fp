import * as React from 'react'
import SlideData from '../components/SlideData'
import Heading from '../ui/Heading'
import Center from '../layout/Center'
import Base from '../parts/Base'

export default SlideData.create({
  elements: {},
  render: _ => 
    <Base>
      <Center>
        <Heading>What does it buy us?</Heading>
      </Center>
    </Base>,
  notes: `
    So, that seems very limitting. We are having to give up a lot of things, so
    the upside must be pretty good.
  `
})