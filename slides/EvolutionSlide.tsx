import * as React from 'react'
import SlideData from '@alvaroc1/present/components/SlideData'
import Base from '../parts/Base'
import func from '../images/func.png'
import error from '../images/error.png'
import state from '../images/state.png'
import effect from '../images/effect.png'
import Stepper from '@alvaroc1/present/components/Stepper'
import Center from '@alvaroc1/present/layout/Center'

export default SlideData.create({
  elements: {
    image: Stepper.states([func, error, state, effect], (img) => {
      return <img src={img} style={{width: 1832 * .4, height: 943 * .4}}/>
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
