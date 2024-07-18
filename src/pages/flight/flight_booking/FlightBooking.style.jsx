
import styled from "styled-components"

export const FlightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;

`


export const  FlightFormSection = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
    align-items: start;
    padding: 100px;
    gap: 20px;
`

export const FlightFormSectionTitle = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    h1{
         font-size: 40px;
    }
`

export const FlightFormSectionContent = styled.div`
    width: 100%;
    display: flex;
    /* gap: 10px; */
    flex-direction: column;   
`


export const ContentSubHeader = styled.div`
    width: 100%;
    display: flex;
`


export const ContentMain = styled.div`
    width: 100%;
    display: flex;
    background-color: #0d3984cf; //
    padding: 40px;
    border-radius: 10px;
    border-top-left-radius: 0px;
`

export const FlightForm = styled.form`
    width: 100%;
    flex-direction: column;
    display: flex;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    gap: 20px;
`


export const FlightType = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;

    
    span{
        display: flex;
        gap: 10px;
        align-items: center;
        color: black;
        
        input{
            width:20px; 
            height: 20px; 
            background-color: blue;
        }


        label{
            font-size: 13px;
        }
    }
`



export const FlightInputContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;


`

export const FlightInputAndDropDown = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;

`

export const FlightInputWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;
    /* background-color: #0d398428; */

    input{
        width: 100%;
        padding: 35px 20px;
        border-radius: 10px;
        font-size: 25px;
        font-weight: bold;
        color: black;
        text-transform: uppercase;
        background-color: #0d398428;
        border: none;

        &:focus {
        outline: 2px solid #0D3984;
    }
    }

    span{
        position: absolute;
        right: 20px;
        bottom: 10px;
        font-size: 30px;
        color: #292929;

    }
`

export const RoundTripImg = styled.div`
        height: 30px;
        width: 30px;

        img{
            height: 30px;
            width: 30px;
        }
`


export const FlightDepartWrapper = styled.div`
        width: 100%;
        display: flex;
        gap: 10px;
`




export const FlightDepatWrapContent = styled.div`
         width: 100%;
        color: grey;
        position: relative;


        input{
            width: 100%;
            padding: 30px 10px 10px 10px;
            border-radius: 10px;
            font-size: 15px;
            background-color: #0d398428;
            border: none;

            &:focus {
            outline: 2px solid #0D3984;

      
         }

    }
`

export const Label = styled.label`
            position: absolute;
            top: 10px;
            left: 10px;    
`


export const FlightPassengerWrapper  = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
`

export const FlightPassengerClass = styled.div`
            width: 100%;
            padding: 14px 10px 10px 10px;
            border-radius: 10px;
            font-size: 15px;
            background-color: #0d398428;
            /* outline: 2px solid #0D3984; */
    

            div{
                color: black
            }
`


export const FlightPassengerContent = styled.div`
    width: 100%;
    position: relative;
`

export const PassengerWrapper = styled.div`
        width: 100%;
        height: auto;
        border-radius: 10px;
        font-size: 13px;
        background-color: white;
        position: absolute;
        margin-top: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
`


export const TakeOffWrapper = styled.div`
                width: 100%;
                position: relative;
`

export const DestinationWrapper = styled.div`
                width: 100%;
                position: relative;
`