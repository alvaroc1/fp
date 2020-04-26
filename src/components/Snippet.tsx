import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import stdStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-forest-dark'

const hiStyles = {
  ...stdStyle,
  hljs: {
    ...stdStyle.hljs,
    background: 'rgba(34,34,34,.5)'
  }
}

interface Props {
  code: string, 
  language: string,
  fontSize?: string | number
}

export default (props: Props) => 
  <div style={{fontSize: props.fontSize ?? 18, textAlign: 'left'}}>
    <SyntaxHighlighter language={props.language} style={hiStyles}>
      {props.code}
    </SyntaxHighlighter>
  </div>
