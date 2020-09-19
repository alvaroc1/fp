import * as React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Base from '../parts/Base'
import composition from '../images/composition.png'
import compositionGroup1 from '../images/composition_group1.png'
import compositionGroup2 from '../images/composition_group2.png'
import Stepper from '@alvaroc1/present/components/Stepper'
import Center from '@alvaroc1/present/layout/Center'

export default SlideData.create({
  elements: {
    image: Stepper.states([composition, compositionGroup1, compositionGroup2], (img) => {
      return <img src={img} style={{width: 1776 * .43, height: 474 * .43}}/>
    })
  },
  render: elements => 
    <Base>
      <Center>
        {elements.image}
      </Center>
    </Base>,
  notes: `
    So what is a function? Not talking about programming here, but a math function.

    It is a mapping from every element of one set, to exactly one element on another set.

    Input -> Output

    Domain -> Codomain

    You know, f(x)
  `
})
