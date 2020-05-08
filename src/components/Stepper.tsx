import * as React from 'react'

const wrapWithKey = (v: React.ReactNode, i: number) => 
  <React.Fragment key={i}>{v}</React.Fragment>

class Stepper {
  constructor (
    readonly size: number,
    readonly render: (current: number, active: boolean, past?: boolean) => React.ReactNode
  ) {}

  static show = (value: React.ReactNode) => new Stepper(
    1,
    (_, active) => active ? value : []
  )

  static arrayStates = <A,S>(
    values: A[], 
    states: S[], 
    fn: (v: A, s: S, active: boolean, past?: boolean) => React.ReactNode
  ) => new Stepper(
    values.length * states.length,
    (current, active, past) => {
      const normalizedCurrent = current
      const idx = Math.floor(normalizedCurrent / states.length)
      const innerIdx = normalizedCurrent % states.length

      return [
        // old values
        ...values.slice(0, idx).map(v => fn(v, states[states.length-1], active)),
        fn(values[idx], states[innerIdx], active, past)
      ].map(wrapWithKey)
    }
  )

  static array = <A,> (
    values: A[], 
    fn: (value: A, active: boolean, past?: boolean) => React.ReactNode
  ) => new Stepper(
    values.length,
    (current, active, past) => {
      return [
        // old values
        ...values.slice(0, current).map(v => fn(v, active, past)),
        fn(values[current], active, past)
      ].map(wrapWithKey)
    }
  )

  static states = <A,> (
    values: A[],
    fn: (value: A, active: boolean, past?: boolean) => React.ReactNode
  ) => new Stepper(
    values.length,
    (current, active, past) => fn(values[current], active, past)
  )

  static objectStates = <A,> (
    values: {[key: string]: A},
    fn: (value: A, active: boolean, past?: boolean) => React.ReactNode
  ): Stepper => Stepper.states(
    Object.keys(values) as any as Array<keyof typeof values>,
    (current, active, past) => fn(values[current], active, past)
  )
}

export default Stepper
