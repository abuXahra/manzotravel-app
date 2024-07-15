
import React from 'react'
import { TripInfoBody, TripInfoContent, TripInfoHeader, TripInfoHeaderItems, TripInfoSideBar, TripInfoWrapper } from './TripInfo.style'
import Button from '../../../../components/button/Button'
import { useNavigate } from 'react-router-dom'

export default function TripInfo() {

    const navigate = useNavigate();

  return (
    <TripInfoWrapper>
        
        {/* header */}
        <TripInfoHeader>
        <TripInfoHeaderItems >
            <div>
                <span><Button text={'Back'} onClick={()=>navigate('/flight-result')}/></span>
                <h2>Proceed with your booking</h2>
            </div>

            <div>
                <h2>steps</h2>
            </div>
        </TripInfoHeaderItems>
        </TripInfoHeader>
         
          {/* body */}
        <TripInfoBody>
              {/* Sidebar */}
            <TripInfoSideBar>
            </TripInfoSideBar>

            {/* Main Content */}
            <TripInfoContent>
            </TripInfoContent>
        </TripInfoBody>
    </TripInfoWrapper>
  )
}
