import * as React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Center from '@alvaroc1/present/layout/Center'
import Base from '../parts/Base'

const h1Styles: React.CSSProperties = {
  fontSize: 240,
  color: 'rgb(100,225,225)'
}

export default SlideData.create({
  elements: {},
  render: () => 
    <Base background='math'>
      <Center>
        <h1 style={h1Styles}>MATH</h1>
      </Center>
    </Base>,
  notes: `
    Essentially Algebra
  `
})