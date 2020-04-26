import * as React from 'react'
import { createStyles, WithStyles, withStyles } from "@material-ui/styles"

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

interface Props extends WithStyles<typeof styles> {
  author: React.ReactNode,
  children: React.ReactNode
}
export default withStyles(styles)((props: Props) =>
  <figure className={props.classes.root}>
    <blockquote className={props.classes.quote}>
      {props.children}
    </blockquote>
    <figcaption className={props.classes.author}>{props.author}</figcaption>
  </figure>
)
