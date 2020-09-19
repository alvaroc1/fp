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
        <Heading>What does it buy us?</Heading>
      </Center>
    </Base>,
  notes: `
    So, that seems very limitting. We are having to give up a lot of things, so
    the upside must be pretty good.
  `
})