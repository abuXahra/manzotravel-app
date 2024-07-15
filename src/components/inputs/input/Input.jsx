


import { InputError, InputLabel, InputStyle, InputWrapper } from './Input.style'

export default function Input({title, value, error, onChange, requiredSymbol, InputWidth, type}) {

  return (
                <InputWrapper InputWidth={InputWidth}>
                    <InputLabel htmlFor="name">{title} {requiredSymbol}</InputLabel>
                    <InputStyle 
                        type={type} 
                        placeholder={title} 
                        value={value}
                        onChange={onChange}
                    />
                    {error? <InputError>{title} required</InputError> : '' }
            </InputWrapper>
        )
    }




    
    