import * as React from 'react'
import { WithStyles, withStyles, createStyles } from "@material-ui/styles";

const styles = createStyles({
  root: {
    position: 'relative',
    boxSizing: 'border-box',
    width: 800,
    height: 600,
    padding: 10,
    background: 'blue'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  foreground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})

interface Props extends WithStyles<typeof styles> {
  background: React.ReactNode,
  children: React.ReactNode
}
export default withStyles(styles)((props: Props) => 
  <div className={props.classes.root}>
    <div className={props.classes.background}>{props.background}</div>
    <div className={props.classes.foreground}>{props.children}</div>
  </div>
)