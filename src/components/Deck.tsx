import * as React from 'react'
import Slide from './SlideData'
import ReactMarkdown from 'react-markdown'
import { WithStyles, createStyles, withStyles } from '@material-ui/styles'
import { useTransition, animated } from 'react-spring'
import { stripIndent } from 'common-tags'
import 'typeface-clear-sans'

const styles = createStyles({
  root: {
    display: 'flex',
    height: '100%',
    fontFamily: 'Clear Sans',
    color: 'rgb(200,200,200)'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
    background: 'rgb(40,40,40)'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 9
  },
  presentation: {
    flex: 1,
    background: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  presentationContent: {
    position: 'relative',
    width: 800,
    height: 600
  },
  notes: {
    height: 200,
    color: 'rgb(50,50,50)',
    padding: '0 20px',
    overflow: 'auto'
  },
  navSlideWrapper: {
    width: 160,
    height: 120,
    margin: '10px 20px'
  },
  navSlide: {
    transformBox: 'border-box',
    transformOrigin: 'left top',
    transform: 'scale(.2)'
  },
  slide: {
    position: 'absolute',
    margin: 'auto'
  }
})

const calculateScale = (presentationSize: [number,number]): number => {
  return Math.min(presentationSize[0] / 800, presentationSize[1] / 600)
}

interface DeckProps extends WithStyles<typeof styles> {
  slides: Slide[]
}

export default withStyles(styles)((props: DeckProps) => {
  const [currentPos, setCurrentPos] = React.useState(0)
  const [forward, setForward] = React.useState(true)
  const [presentationSize, setPresentationSize] = React.useState<[number,number]>([0,0])
  const presentationRef = React.useRef<HTMLDivElement>(null)

  const findSlidePos = (slideIdx: number) => {
    const go = (sIdx: number, slides: Slide[]): number => {
      if (slides.length === 0) throw 'error'
      const [first, ...rest] = slides
      return sIdx == 0 ? 
        0 : 
        (first.size + go(sIdx-1, rest))
    }
    return go(slideIdx, props.slides)
  }

  const size = props.slides.reduce((acc,s) => acc + s.size, 0)

  const next = () => {
    setForward(true)
    if (currentPos < size -1) setCurrentPos(currentPos + 1)
  }
  const prev = () => {
    setForward(false)
    if (currentPos > 0) setCurrentPos(currentPos - 1)
  }

  const handleKeyUp = (ev: KeyboardEvent) => {
    switch (ev.key) {
      case "ArrowRight":  next(); break;
      case "ArrowLeft":   prev(); break;
      case "f":           requestFullcreen(); break;
    }
  }
  const requestFullcreen = () => {
    presentationRef.current!.requestFullscreen()
  }

  const handleResize = (_: UIEvent) => {
    setPresentationSize([
      presentationRef.current?.clientWidth ?? 0, 
      presentationRef.current?.clientHeight ?? 0
    ])
  }


  React.useEffect(() => {
    setPresentationSize([
      presentationRef.current?.clientWidth ?? 0, 
      presentationRef.current?.clientHeight ?? 0
    ])
  }, [])

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('resize', handleResize)
    }
  })

  const presentationContentStyles: React.CSSProperties = {
    transform: `scale(${calculateScale(presentationSize)})`,
  }

  const findCurrent = (idx: number, curPos: number): [number,number] => {
    const slide = props.slides[idx]
    return curPos < slide.size ? 
      [idx, curPos] :
      findCurrent(idx+1, curPos - slide.size)
  }

  const [currentSlideIdx, currentElementIdx] = findCurrent(0, currentPos)

  const transitionsForward = useTransition(currentSlideIdx, null, {
    from: {position: 'fixed', transform: 'translate(120%,0)'},
    enter: {position: 'fixed', transform: 'translate(0%,0)'},
    leave: {position: 'fixed', transform: 'translate(-120%,0)'}
  })
  const transitionsBackward = useTransition(currentSlideIdx, null, {
    from: {position: 'fixed', transform: 'translate(-120%,0)'},
    enter: {position: 'fixed', transform: 'translate(0%,0)'},
    leave: {position: 'fixed', transform: 'translate(120%,0)'}
  })

  return (
    <div className={props.classes.root}>
      <div className={props.classes.nav}>
              {currentSlideIdx}:{currentElementIdx} - {currentPos + 1} of {size}
        {props.slides.map((s, k) =>
          <div className={props.classes.navSlideWrapper} key={k} 
              style={k === currentSlideIdx ? {outline: '2px solid lime'} : {}}
              onClick={() => setCurrentPos(findSlidePos(k))}>       
            <div className={props.classes.navSlide}>
              {s.render(s.size - 1)}
            </div>
          </div>
        )}
      </div>

      <div className={props.classes.content}>
        <div className={props.classes.presentation} ref={presentationRef}>
          <div className={props.classes.presentationContent} style={presentationContentStyles}>
            {(forward ? transitionsForward : transitionsBackward).map(d => 
              <animated.div className={props.classes.slide} style={d.props} key={d.key}>
                {props.slides[d.item].render(currentElementIdx)}
              </animated.div>
            )}
          </div>
        </div>
        <div className={props.classes.notes}>
          <ReactMarkdown source={stripIndent(props.slides[currentSlideIdx].notes ?? '')}/>
        </div>
      </div>
    </div>
  )
})
