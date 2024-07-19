import React, { useState } from "react";
import myObject from "../../../data/json/myObject.json";
import {
  DateFlight,
  DNRDetail,
  DNRDetailAirport,
  DNRDetailBaggage,
  DNRDetailFlightImage,
  DNRDetailTime,
  DnRHeader,
  DnRWrapper,
  FlightCard,
  FlightCardContent,
  FLightDetail,
  FlightDetailButton,
  FlightDetailClose,
  FLightDetailContent,
  FlightDetailDNR,
  FlightDetialButton,
  FlightLogo,
  FlightResultContent,
  FlightResultHeader,
  FlightResultMain,
  FlightResultSideBar,
  FlightResultWrapper,
  MdFlightStyled,
  ResultCounter,
  ResultCounterLeft,
  ResultCounterRight,
} from "./FlightResult.style";
import { MdFlight } from "react-icons/md";
import flightLogo from "../../../images/aire-peace.png";
import { FaTimes } from "react-icons/fa";
import Button from "../../../components/button/Button";
import FlightIcon from "../../../components/flight_icon/FlightIcon";
import FlightResultForDepartandReturn from "../../../components/Flight/FlightResultForDepartandReturn";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/store";
import AirlineCodeLookup from "../../../components/Flight/AirlineCodeLookup";
import AirlineFlightLogo from "../../../components/Flight/AirlineFlightLogo";

export default function FlightResult() {
  // const flightData = JSON.parse(myObject);
  const { flightResult } = useAuthStore();
  const navigate = useNavigate();

  // Show View Detail Variable
  const [showViewDetailCard, setShowViewDetailCard] = useState(false);

  // This is the Show View Detail Variable index
  const [index, setIndex] = useState(0);

  //show view detail handler
  const showViewDetail = () => {
    setShowViewDetailCard(true);
  };

  //hide view detail handler
  const closeViewDetail = () => {
    setShowViewDetailCard(false);
  };

  // continue Booking Handler
  const continueBooking = () => {
    navigate(`/trip-info/${index}`);
    setShowViewDetailCard(false);
  };

  // Cacula for duration
  function parseDuration(duration) {
    const regex = /PT(\d+H)?(\d+M)?/;
    const matches = duration.match(regex);

    let hours = 0;
    let minutes = 0;

    if (matches[1]) {
      hours = parseInt(matches[1].replace("H", ""));
    }
    if (matches[2]) {
      minutes = parseInt(matches[2].replace("M", ""));
    }

    return { hours, minutes };
  }

  return (
    <FlightResultWrapper>
      {/* flight header section */}
      <FlightResultHeader>
        <DateFlight>Mon, 9 Sep 2024</DateFlight>
        <p>
          Select your departure flight from <span>{flightResult[0]}</span> to{" "}
          <span>{flightResult[1]}</span>
        </p>
      </FlightResultHeader>

      {/* flight result section */}
      <FlightResultContent>
        {/* Flight Result Main Content */}
        <FlightResultMain>
          {/* Counter Summary */}
          <ResultCounter>
            <ResultCounterLeft>
              <h3>{flightResult[2]?.length} results</h3>
              <p>Fares displayed are for all passengers.</p>
            </ResultCounterLeft>

            <ResultCounterRight>
              <span onClick={() => {}}>See more dates</span>
              <span onClick={() => {}}>NGN - NG Nairas (₦)</span>
              <span onClick={() => {}}>Sort and Filter</span>
            </ResultCounterRight>
          </ResultCounter>

          {/* Flight Result Card  1*/}
          <FlightResultForDepartandReturn
            flightSearchResultData={flightResult[2]}
            setIndex={setIndex}
            showViewDetail={showViewDetail}
          />
        </FlightResultMain>
      </FlightResultContent>

      {/* FLIGHT DETAIL SECTION */}
      {showViewDetailCard && (
        <FLightDetail>
          {/* close icon */}
          <FlightDetailClose>
            <FaTimes onClick={closeViewDetail} />
          </FlightDetailClose>

          {/* flight detail content */}
          <FLightDetailContent>
            {/* flight departure */}
            <FlightDetailDNR>
              <span>
                <div>
                  <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />
                  <h3>{`Flight From ${flightResult[0]} - ${flightResult[1]}`}</h3>
                </div>
                <b>Outbound</b>
              </span>
              <DNRDetail>
                <DNRDetailFlightImage>
                  <img
                    src={`https://wakanow-images.azureedge.net/Images/flight-logos/${flightResult[2][index].validatingAirlineCodes[0]}.gif`}
                    alt={flightResult[2][index].validatingAirlineCodes[0]}
                  />
                </DNRDetailFlightImage>

                <DNRDetailTime>
                  <span>
                    <h3>
                      {new Date(
                        flightResult[2][
                          index
                        ].itineraries[0].segments[0].departure.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h3>
                    <AirlineCodeLookup
                      keyWord={
                        flightResult[2][index].itineraries[0].segments[0]
                          .departure.iataCode
                      }
                    />
                  </span>
                  <span>
                    {`${
                      parseDuration(
                        flightResult[2][index].itineraries[0].segments[0]
                          .duration
                      ).hours
                    }hr ${
                      parseDuration(
                        flightResult[2][index].itineraries[0].segments[0]
                          .duration
                      ).minutes
                    }min`}
                    <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />
                    {
                      flightResult[2][index].itineraries[0].segments[0]
                        .numberOfStops
                    }
                    -Stop
                  </span>
                  <span>
                    <h3>
                      {" "}
                      {new Date(
                        flightResult[2][
                          index
                        ].itineraries[0].segments[0].arrival.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h3>
                    <AirlineCodeLookup
                      keyWord={
                        flightResult[2][index].itineraries[0].segments[0]
                          .arrival.iataCode
                      }
                    />
                  </span>
                </DNRDetailTime>

                <DNRDetailAirport>
                  <div>Airport ({flightResult[3]})</div>
                  <div>Airport ({flightResult[4]})</div>
                </DNRDetailAirport>
                <DNRDetailBaggage>
                  <span>
                    <h3>Airline</h3>

                    <AirlineFlightLogo
                      keyWord={flightResult[2][index].validatingAirlineCodes[0]}
                      only={true}
                    />
                  </span>
                  <span>
                    <h3>Baggage</h3>
                    100kg
                  </span>
                </DNRDetailBaggage>
              </DNRDetail>
            </FlightDetailDNR>

            {/* flight return */}
            <FlightDetailDNR>
              <span>
                <div>
                  <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                  <h3>
                    Flight From {flightResult[1]} - {flightResult[0]}
                  </h3>
                </div>
                <b>Inbound</b>
              </span>
              <DNRDetail>
                <DNRDetailFlightImage>
                  <img
                    src={`https://wakanow-images.azureedge.net/Images/flight-logos/${flightResult[2][index].validatingAirlineCodes[0]}.gif`}
                    alt={flightResult[2][index].validatingAirlineCodes[0]}
                  />
                </DNRDetailFlightImage>

                <DNRDetailTime>
                  <span>
                    <h3>
                      {new Date(
                        flightResult[2][
                          index
                        ].itineraries[1].segments[0].departure.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h3>
                    <AirlineCodeLookup
                      keyWord={
                        flightResult[2][index].itineraries[1].segments[0]
                          .departure.iataCode
                      }
                    />
                  </span>
                  <span>
                    {`${
                      parseDuration(
                        flightResult[2][index].itineraries[1].segments[0]
                          .duration
                      ).hours
                    }hr ${
                      parseDuration(
                        flightResult[2][index].itineraries[1].segments[0]
                          .duration
                      ).minutes
                    }min`}
                    <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                    {
                      flightResult[2][index].itineraries[1].segments[0]
                        .numberOfStops
                    }
                    -Stop
                  </span>
                  <span>
                    <h3>
                      {new Date(
                        flightResult[2][
                          index
                        ].itineraries[1].segments[0].arrival.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h3>
                    <AirlineCodeLookup
                      keyWord={
                        flightResult[2][index].itineraries[1].segments[0]
                          .arrival.iataCode
                      }
                    />
                  </span>
                </DNRDetailTime>

                <DNRDetailAirport>
                  <div>({flightResult[4]})</div>
                  <div>({flightResult[3]})</div>
                </DNRDetailAirport>
                <DNRDetailBaggage>
                  <span>
                    <h3>Airline</h3>
                    <AirlineFlightLogo
                      keyWord={flightResult[2][index].validatingAirlineCodes[0]}
                      only={true}
                    />
                  </span>
                  <span>
                    <h3>Baggage</h3>
                    100kg
                  </span>
                </DNRDetailBaggage>
              </DNRDetail>
            </FlightDetailDNR>
          </FLightDetailContent>

          <FlightDetailButton>
            <Button text={"Continue Booking"} onClick={continueBooking} />
          </FlightDetailButton>
        </FLightDetail>
      )}
    </FlightResultWrapper>
  );
}

// {
//   itineraries.map((data, i)=>(
//     <div>
//       Duration: {data.duration}
//       Segments:
//       <ul>
//         Departur:
//           {
//             data.segments.map((segment, j)=>(
//               <li>
//                   {segment.departure.iataCode} <br/>
//                   {segment.departure.terminal} <br/>
//                   {segment.departure.at} <br/>
//                 </li>
//             ))
//           }
//       </ul>

//       </div>
//   ))
// }

//  {/* Flight Result sidebar */}
//  <FlightResultSideBar>

//  </FlightResultSideBar>
