
import React from 'react'
import { MdFlightStyled } from './FlightIcon.style'
import { MdFlight } from 'react-icons/md'

export default function FlightIcon({rotate, iconColor}) {
  return <MdFlightStyled rotateIcon={rotate} IconColor={iconColor}><MdFlight/></MdFlightStyled>
}
