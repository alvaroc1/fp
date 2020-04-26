import * as React from 'react'
import Stepper from './Stepper'

type Steppers = {[key: string]: Stepper}

export type RenderedSteppers<E extends Steppers> = {
  [K in keyof E]: React.ReactNode
}

export const steppersSize = (elements: Steppers) => 
  Object.values(elements).reduce((acc,i) => acc + i.size, 0)

export const renderSteppers = <E extends Steppers>(elements: E, current: number) => {
  const [renderedElems, ] = Object.keys(elements).reduce(([acc,handled], key) => {
    const el = elements[key]
    const curIdx = current - handled

    const step = 
      curIdx < 0 ? 0 :
        curIdx >= el.size ? el.size - 1 : curIdx

    return [
      ({...acc, [key]: el.render(step, curIdx >= 0, curIdx >= el.size)}), 
      handled + el.size
    ]
  }, [{}, 0])

  return renderedElems as RenderedSteppers<E>
}

/*
export namespace Steppers {

  export const render = <E extends Steppers,R>(elements: E, current: number) => {
    const [renderedElems, _] = Object.keys(elements).reduce(([acc,handled], key) => {
      const el = elements[key]
      const curIdx = (current - 1) - handled
  
      const step = curIdx < 0 || curIdx >= el.size ? el.size - 1 : curIdx
  
      return [
        ({...acc, [key]: el.render(step, curIdx >= 0)}), 
        handled + el.size
      ]
    }, [{}, 0])
    return renderedElems as RenderedSteppers<E>
  }


  export const size = (elements: Steppers) => Object.values(elements).reduce((acc,i) => acc + i.size, 0)

}
*/
export default Steppers