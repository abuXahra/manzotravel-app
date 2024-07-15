import styled from "styled-components";



export const  TimelineWrapper = styled.div`
        display: flex;
        gap: 5px;
        align-items: center;
        font-size: 12px;

        span{
            display: flex;
            gap: 5px;
            align-items: center;

            div{
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: white;
                height: 20px;
                width: 20px;
                color: #0D3984;
                margin: 0px 3px;
            }

            hr{
                width: 15px;
            }
        }

        & span:nth-child(${({spanIndex})=>spanIndex}){
                div{
                    box-shadow: ${({currentStep})=> currentStep || "none"};
                }
          
            }

`