import * as React from 'react'
import SlideData from '../components/SlideData'
import { createStyles, withStyles, WithStyles } from '@material-ui/styles'
import 'typeface-roboto'
import 'typeface-montserrat'
import Center from '../layout/Center'

const styles = createStyles({
  root: {
    fontSize: '30px',
    color: 'rgb(200,200,200)',
    fontFamily: 'Clear Sans',
    background: 'rgba(0,0,0,.3)',
    margin: 0,
    padding: '20px 60px',
    wordSpacing: '.1em'
  },
  quote: {
    margin: 0,
    textTransform: 'uppercase',
    '& em': {
      fontStyle: 'normal',
      fontWeight: 'bold',
      color: 'rgb(100,225,225)'
    }
  },
  author: {
    lineHeight: 2,
    textAlign: 'right',
    fontStyle: 'italic'
  }
})

interface QuoteProps extends WithStyles<typeof styles> {
  author: React.ReactNode,
  children: React.ReactNode
}
const Quote = withStyles(styles)((props: QuoteProps) =>
  <figure className={props.classes.root}>
    <blockquote className={props.classes.quote}>
      {props.children}
    </blockquote>
    <figcaption className={props.classes.author}>{props.author}</figcaption>
  </figure>
)

export default SlideData.create({
  elements: {},
  render: () => 
    <Center>
      <div style={{width: '800'}}>
        <div style={{marginBottom: 10}}><Quote author='Socrates'>To be is to do</Quote></div>
        <div style={{marginBottom: 10}}><Quote author='Jean-Paul Sartre'>To do is to be</Quote></div>
        <Quote author='Frank Sinatra'>Do be do be do</Quote>
      </div>
    </Center>,
  notes: `
    We must recognize the distinction between *Being* and *Doing*.
  `
})
