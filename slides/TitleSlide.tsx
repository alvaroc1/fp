import * as React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import 'typeface-montserrat'
import Center from '@alvaroc1/present/layout/Center'
import Base from '../parts/Base'

const styles: React.CSSProperties = {
  boxSizing: 'border-box',
  fontFamily: 'Montserrat',
  fontSize: 70,
  padding: 30,
  textAlign: 'center'
}

export default SlideData.create({
  elements: {},
  render: () => 
    <Base>
      <Center>
        <h1 style={styles}>Functional Programming</h1>
      </Center>
    </Base>,
  notes: `Hello`
})
