import * as React from 'react'

type Props = {
  text: string,
}

export const Fancy: React.SFC<Props> = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}