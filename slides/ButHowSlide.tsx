import * as React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Heading from '@alvaroc1/present/ui/Heading'
import Center from '@alvaroc1/present/layout/Center'
import Base from '../parts/Base'

export default SlideData.create({
  elements: {},
  render: _ => 
    <Base>
      <Center>
        <Heading>But the World is Impure!</Heading>
      </Center>
    </Base>,
  notes: `
    Ultimately we have to do some impure things.

    At some point we NEED to save to the database, write to a log file, or show something 
    on the screen.

    Recognize that we don't have to change everything to benefit from functional programming, 
    We want to do this incrementally.
  `
})
