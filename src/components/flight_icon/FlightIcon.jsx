
import React from 'react'
import { MdFlightStyled } from './FlightIcon.style'
import { MdFlight } from 'react-icons/md'

export default function FlightIcon({rotate, iconColor, IconSize}) {
  return <MdFlightStyled rotateIcon={rotate} IconColor={iconColor} IconSize={IconSize}><MdFlight/></MdFlightStyled>
}
