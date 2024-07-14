

import React from 'react'
import { ButtonStyle } from './Button.style'

export default function Button({onClick, text}) {
  return (
    <ButtonStyle onClick={onClick}>
        {text}
    </ButtonStyle>
  )
}
