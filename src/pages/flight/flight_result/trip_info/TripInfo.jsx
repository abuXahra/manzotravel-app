
import React from 'react'
import { TripInfoBody, TripInfoContent, TripInfoHeader, TripInfoSideBar, TripInfoWrapper } from './TripInfo.style'

export default function TripInfo() {
  return (
    <TripInfoWrapper>
        {/* header */}
        <TripInfoHeader>
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
