import * as React from 'react'
import ReactDOM from 'react-dom'
import Deck from './components/Deck'
import TitleSlide from './slides/TitleSlide'
import DanielQuoteSlide from './slides/DanielQuoteSlide'
import MathSlide from './slides/MathSlide'
import WhatIsItSlide from './slides/WhatIsItSlide'
import WhyMathSlide from './slides/WhyMathSlide'
import FunctionSlide from './slides/FunctionSlide'
import FunctionPropsSlide from './slides/FunctionPropsSlide'
import TotalitySlide from './slides/TotalitySlide'
import DeterminismSlide from './slides/DeterminismSlide'
import PuritySlide from './slides/PuritySlide'
import WhatDoesItBuySlide from './slides/WhatDoesItBuySlide'
import LocalReasoningSlide from './slides/LocalReasoningSlide'
import SubstitutionSlide from './slides/SubstitutionSlide'
import CompositionSlide from './slides/CompositionSlide'
import MemoizationSlide from './slides/MemoizationSlide'
import ButHowSlide from './slides/ButHowSlide'
import TestabilitySlide from './slides/TestabilitySlide'
import DeclarativeVsImperativeSlide from './slides/DeclarativeVsImperative'
import IslandsSlide from './slides/IslandsSlide'
import DoBeDoBeDoSlide from './slides/DoBeDoBeDoSlide'
import PureOnTheInsideSlide from './slides/PureOnTheInsideSlide'

const Presentation = () => 
  <Deck
    slides={[
      TitleSlide,
      DanielQuoteSlide,
      WhatIsItSlide,
      MathSlide,
      WhyMathSlide,
      FunctionSlide,
      FunctionPropsSlide,
      TotalitySlide,
      DeterminismSlide,
      PuritySlide,
      WhatDoesItBuySlide,
      SubstitutionSlide,
      CompositionSlide,
      MemoizationSlide,
      TestabilitySlide,
      LocalReasoningSlide,
      ButHowSlide,
      DoBeDoBeDoSlide,
      DeclarativeVsImperativeSlide,
      IslandsSlide,
      PureOnTheInsideSlide
    ]}/>

ReactDOM.render(
  <Presentation/>,
  document.getElementById('container')
)

/*
Challenges:
  - Database
  - Logging
    - Will logging break your application or your data integrity?
  - Metrics
  - do be do be do
  “To be is to do”—Socrates.
  “To do is to be”—Jean-Paul Sartre.
  “Do be do be do”—Frank Sinatra.
 */