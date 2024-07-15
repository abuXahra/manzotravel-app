import styled from "styled-components";



export const TripInfoWrapper  = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0d398420;
    height: 100vh;
    
`

export const TripInfoHeader = styled.div`
    height: 300px;
    width: 100%;
    background-color: #0D3984;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius:80%;
`


export const TripInfoHeaderItems = styled.div`
    width: 100%;
    display: flex;
    /* gap: 30px; */
    padding: 30px;
    color: white;
    align-items: center;
    justify-content: space-between;
`


export const  TripInfoHeaderTitle = styled.div`
        display: flex;
        gap: 30px;
        align-items: center;
`

export const TripInfoBody = styled.div`
    width: 100%;
    margin-top: -200px;
    display: flex;
    gap: 20px;
    padding: 20px 40px;
`

// SIDEBAR
export const TripInfoSideBar = styled.div`
    width: 25%;
    display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: white;
      padding: 30px;
      border-radius: 10px;
`

// CONTENT & FORM
export const TripInfoContent =styled.div`
      width: 75%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: white;
      padding: 30px;
      border-radius: 10px;
`

export const TripPassenger = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    div{
        gap: 20px;
        align-items: center;
        display: flex;

        span{
        color: white;
        border-radius: 100%;
        background-color: #0D3984;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px; 
        width: 30px;
     }
    }
  
     span{
        color: white;
        border-radius: 100%;
        background-color: #0D3984;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px; 
        width: 30px;
     }

     p{
        font-size: 13px;
     }
`

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

export const FormContent = styled.div`
        display: flex;
        gap: 10px;
        width: 100%;
`


export const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 20px;
`