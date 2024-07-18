import styled from 'styled-components'


export const HeroWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${({heroImage})=>heroImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const HeroOverlay = styled.div`
    width: 100%;
    height: 100vh;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    background-color: #0000009e;
    /* background-color: #0d39846c; */
`