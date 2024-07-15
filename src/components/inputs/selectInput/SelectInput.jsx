

import React from 'react'
import { SelectInputError, SelectInputLabel, SelectInputOption, SelectInputStyle, SelectInputWrapper } from './SelectInput.style'

export default function SelectInput({title, error,options}) {


    const optionss = [
        {
            title: "Mr.",
            value: "Mr.",
        },
        {
            title: "Canada",
            value: "Canada",
        },
        {
            title: "United Kingdom",
            value: "uk",
        },
        {
            title: "Germany",
            value: "germany",
        },
        {
            title: "France",
            value: "france",
        },
    ]
  return (
    <SelectInputWrapper>
        <SelectInputLabel htmlFor="country">Country {title}</SelectInputLabel>
        <SelectInputStyle id="country" name="country">
           
           {options && options.map((option, i)=>(
                  <SelectInputOption value={option.value}>{option.title}</SelectInputOption>
           ))}
          
        </SelectInputStyle>
        {error? <SelectInputError>{title} is required</SelectInputError> : '' }
    </SelectInputWrapper>
  )
}
