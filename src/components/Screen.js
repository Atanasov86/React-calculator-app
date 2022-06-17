import React from 'react'
import { Textfit } from 'react-textfit'

const Screen = (props) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {props.value}
    </Textfit>
  )
}

export default Screen