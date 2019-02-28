import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Hello = (props: { greeting: string }) => (
  <h1>{props.greeting} Andrei</h1>
)

ReactDOM.render(
  <Hello greeting="Hello"/>,
  document.getElementById('root')
)