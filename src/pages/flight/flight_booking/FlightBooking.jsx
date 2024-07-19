import React, { useState, useEffect } from "react";
import HeroSection from "../../../components/hero/HeroSection";
import heroImage from "../../../images/travelunsplash.jpg";
import roundtrip from "../../../images/svg-icon/flight-return-round-svgrepo-com.svg";
import {
  ContentMain,
  ContentSubHeader,
  DestinationWrapper,
  FlightDepartWrapper,
  FlightDepatWrapContent,
  FlightForm,
  FlightFormSection,
  FlightFormSectionContent,
  FlightFormSectionTitle,
  FlightInputAndDropDown,
  FlightInputContainer,
  FlightInputWrapper,
  FlightPassengerClass,
  FlightPassengerContent,
  FlightPassengerWrapper,
  FlightType,
  Flightwrapper,
  FlightWrapper,
  Label,
  LocationDropdownWrapper,
  PassengerWrapper,
  RoundTripImg,
  TakeOffWrapper,
} from "./FlightBooking.style";
import { MdFlightTakeoff } from "react-icons/md";
import { MdFlightLand } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { LiaCcVisa } from "react-icons/lia";
import BookingIcons from "../../../components/booking_icons/BookingIcons";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import PassengerData from "../../../components/booking_icons/passenger_data/PassengerData";
import { FlightClassWrapper } from "../../../components/booking_icons/flight_class/FlightClass.style";
import FlightClass from "../../../components/booking_icons/flight_class/FlightClass";
import LocationDropdown from "../../../components/booking_icons/location_dropdow/LocationDropdown";
import { useDebounce } from "../../../components/dalay";
import { useAuthStore } from "../../../store/store";
import axios from "axios";

export default function FlightBooking() {
  const { setFlightResult } = useAuthStore();
  const navigate = useNavigate();
  //  query parameters
  let queryParams;
  // FlightItems
  const FlightItems = [
    {
      title: "Flight",
      link: "#",
      Icon: <MdFlightTakeoff />,
      bgColor: "",
      border: "",
    },
    {
      title: "Hotel",
      link: "/hotel-reservation",
      Icon: <MdHotel />,
      bgColor: "none",
      border: "none",
    },
    {
      title: "Visa",
      link: "/visa",
      Icon: <LiaCcVisa />,
      bgColor: "none",
      border: "none",
    },
  ];

  const [tripType, setTripType] = useState("roundTrip"); // roundTrip is selected by default
  const [kickOff, setKickOff] = useState();
  const [destination, setDestination] = useState();
  const [departDate, setDepartDate] = useState();
  const [returnDate, setreturnDate] = useState();
  const [passengerCount, setPassengerCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [flightClass, setFlightClass] = useState("ECONOMY");
  const [originLocationCode, setOriginLocationCode] = useState("");
  const [destinationLocationCode, setDestinationLocationCode] = useState("");
  const [showReturnDate, setShowReturnDte] = useState(true);
  const [currencyCode, setCurrencyCode] = useState("NGN"); // default currency code
  const [nonStop, setNonStop] = useState(false); // default to non-stop false
  // Flight Type onchange
  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
    if (tripType === "oneWay") {
      setShowReturnDte(true);
    } else {
      setShowReturnDte(false);
    }
    console.log(tripType);
  };

  const [overallCount, setOverallCount] = useState(passengerCount);

  // passange count event handler Event handler
  const handleKickOff = (e) => {
    setKickOff(e.target.value);
  };

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const handleDepartureDate = (e) => {
    setDepartDate(e.target.value);
  };

  const handleReturnDate = (e) => {
    setreturnDate(e.target.value);
  };

  const handlePassengerReduce = (e) => {
    e.preventDefault();
    if (passengerCount > 1) {
      setPassengerCount((prevCount) => prevCount - 1);
      setOverallCount((prevCount) => prevCount - passengerCount);
    }
  };

  const handlePassengerAdd = (e) => {
    e.preventDefault();
    if (passengerCount < 9) setPassengerCount((prevCount) => prevCount + 1);
    setOverallCount((prevCount) => prevCount + passengerCount);
  };

  const handleChildrenReduce = (e) => {
    e.preventDefault();
    if (childrenCount > 0) {
      setChildrenCount((prevCount) => prevCount - 1);
      setOverallCount((prevCount) => prevCount - childrenCount);
    }
  };

  const handleChildrenAdd = (e) => {
    e.preventDefault();
    if (childrenCount < 4) {
      setChildrenCount((prevCount) => prevCount + 1);
      setOverallCount((prevCount) => prevCount + childrenCount);
    }
  };

  const handleInfantReduce = (e) => {
    e.preventDefault();
    if (infantCount > 0) {
      setInfantCount((prevCount) => prevCount - 1);
      setOverallCount((prevCount) => prevCount - infantCount);
    }
  };

  const handleInfantAdd = (e) => {
    e.preventDefault();
    if (infantCount < 2) {
      setInfantCount((prevCount) => prevCount + 1);
      setOverallCount((prevCount) => prevCount + infantCount);
    }
  };

  // Handler for flight class selection
  const handleFlightClassChange = (event) => {
    setFlightClass(event.target.value);
  };

  const [showPassenger, setShowPassenger] = useState(false);

  // DROPDOWN LOCATION AND DESTINATION AIRPORTS

  const [takeOffAportList, setTakeOffAportList] = useState([
    {
      type: "location",
      subType: "AIRPORT",
      name: "Nnamdi Azikwe Internatinal Airport",
      detailedName: "CHIFENG/CN:YULONG",
      id: "ACIF",
      self: {
        href: "https://test.api.amadeus.com/v1/reference-data/locations/ACIF",
        methods: ["GET"],
      },
      timeZoneOffset: "+08:00",
      iataCode: "CIF",
      geoCode: {
        latitude: 42.23334,
        longitude: 118.9095,
      },
      address: {
        cityName: "Abuja",
        cityCode: "ABV",
        countryName: "Nigeria",
        countryCode: "CN",
        regionCode: "Africa",
      },
      analytics: {
        travelers: {
          score: 1,
        },
      },
    },
    {
      type: "location",
      subType: "CITY",
      name: "Murtala Muhammad Internatinal Airport",
      detailedName: "CHIFENG/CN",
      id: "CCIF",
      self: {
        href: "https://test.api.amadeus.com/v1/reference-data/locations/CCIF",
        methods: ["GET"],
      },
      timeZoneOffset: "+08:00",
      iataCode: "CIF",
      geoCode: {
        latitude: 42.23334,
        longitude: 118.9095,
      },
      address: {
        cityName: "Lagos",
        cityCode: "LOS",
        countryName: "Nigeria",
        countryCode: "CN",
        regionCode: "Africa",
      },
      analytics: {
        travelers: {
          score: 1,
        },
      },
    },
  ]);
  const [destinationAriporList, setDestinationAriporList] = useState([
    {
      type: "location",
      subType: "AIRPORT",
      name: "Nnamdi Azikwe Internatinal Airport",
      detailedName: "CHIFENG/CN:YULONG",
      id: "ACIF",
      self: {
        href: "https://test.api.amadeus.com/v1/reference-data/locations/ACIF",
        methods: ["GET"],
      },
      timeZoneOffset: "+08:00",
      iataCode: "CIF",
      geoCode: {
        latitude: 42.23334,
        longitude: 118.9095,
      },
      address: {
        cityName: "Abuja",
        cityCode: "ABV",
        countryName: "Nigeria",
        countryCode: "CN",
        regionCode: "Africa",
      },
      analytics: {
        travelers: {
          score: 1,
        },
      },
    },
    {
      type: "location",
      subType: "CITY",
      name: "Murtala Muhammad Internatinal Airport",
      detailedName: "CHIFENG/CN",
      id: "CCIF",
      self: {
        href: "https://test.api.amadeus.com/v1/reference-data/locations/CCIF",
        methods: ["GET"],
      },
      timeZoneOffset: "+08:00",
      iataCode: "CIF",
      geoCode: {
        latitude: 42.23334,
        longitude: 118.9095,
      },
      address: {
        cityName: "Lagos",
        cityCode: "LOS",
        countryName: "Nigeria",
        countryCode: "CN",
        regionCode: "Africa",
      },
      analytics: {
        travelers: {
          score: 1,
        },
      },
    },
  ]);

  const [searchTakeOffInputValue, setSearchTakeOffInputValue] = useState("");
  const [searchDestinationInputValue, setSearchDestinationInputValue] =
    useState("");

  const originLocation = useDebounce(searchTakeOffInputValue);
  const destinationLocation = useDebounce(searchDestinationInputValue);
  useEffect(() => {
    airports(originLocation, 0);
  }, [originLocation]);
  useEffect(() => {
    airports(destinationLocation, 1);
  }, [destinationLocation]);
  const airports = async (keyWord, num) => {
    const res = await axios
      .post("http://localhost:5000/airport", { word: keyWord })
      .catch((err) => {
        console.log(err?.response?.data);
      });

    if (res) {
      console.log(res.data.data);

      // setOptions(res.data.data);
      // console.log(num);
      if (num === 0) {
        setTakeOffAportList(res?.data?.data);
      } else {
        setDestinationAriporList(res?.data?.data);
      }

      //navigate("/verification");
    }
  };

  // TakeOff Search airport handler
  const onChangeTakeOffHandler = (e) => {
    setSearchTakeOffInputValue(e.target.value);
  };

  // destionaton Search airport handler
  const onChangeDestinationHandler = (e) => {
    setSearchDestinationInputValue(e.target.value);
  };

  const [takeOffAirport, setTakeOffAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");

  // show/hide takeoff and destinatio down airport Lists
  const [showTakeOffAirports, setShowTakeOffAirports] = useState(false);
  const [showDestinationAirports, setShowDestinationAirports] = useState(false);

  const onCloseTakOffDropdwon = () => {
    setShowTakeOffAirports(false);
  };

  const onCloseDestinationDropdwon = () => {
    setShowDestinationAirports(false);
  };

  // show/hide flightInputs
  const [showFlightInputs, setshowFlightInputs] = useState(false);
  const handleShowFlightInputsA = () => {
    setShowTakeOffAirports(!showTakeOffAirports);
    setshowFlightInputs(true);
  };

  const handleShowFlightInputsB = () => {
    setShowDestinationAirports(!showDestinationAirports);
    setshowFlightInputs(true);
  };

  if (tripType === "roundTrip") {
    queryParams = {
      originLocationCode,
      destinationLocationCode,
      departureDate: departDate,
      returnDate,
      adults: passengerCount,
      children: childrenCount,
      infants: infantCount,
      travelClass: flightClass,
      // nonStop,
      currencyCode,
    };
  } else {
    queryParams = {
      originLocationCode,
      destinationLocationCode,
      departureDate: departDate,
      // returnDate,
      adults: passengerCount,
      children: childrenCount,
      infants: infantCount,
      travelClass: flightClass,
      // nonStop,
      currencyCode,
    };
  }
  // console.log(queryParams);

  const bookflights = async () => {
    const res = await axios
      .post("http://localhost:5000/bookflights", queryParams)
      .catch((err) => {
        console.log(err?.response?.data);
      });

    if (res) {
      console.log(res.data.data);
      setFlightResult([
        takeOffAirport,
        destinationAirport,
        res.data.data,
        queryParams.originLocationCode,
        queryParams.destinationLocationCode,
      ]);
      // setFlightSearch(res.data.data);
      navigate("/flight-result");
    }
  };
  return (
    <FlightWrapper>
      {/* hero section with form */}
      <HeroSection heroImage={heroImage}>
        {/* flight form section */}
        <FlightFormSection>
          {/* flight form section  title */}
          <FlightFormSectionTitle>
            <h4>Book your flight?</h4>
            <h1>Let's take you round the world...</h1>
          </FlightFormSectionTitle>

          {/* flight form section content */}
          <FlightFormSectionContent>
            {/* Sub Header */}
            <ContentSubHeader>
              {/* FlightITEMS */}
              {FlightItems.map((item, i) => (
                <BookingIcons
                  key={i}
                  title={item.title}
                  link={item.link}
                  Icon={item.Icon}
                  headerBg={item.bgColor}
                  bottomBorder={item.border}
                />
              ))}
            </ContentSubHeader>

            <ContentMain>
              <FlightForm>
                {/* Flight Type Radio button*/}
                {showFlightInputs && (
                  <FlightType id="flight-type-id" class="flight-type-wrapper">
                    <span>
                      <input
                        type="radio"
                        id="roundTrip"
                        name="tripType"
                        value="roundTrip"
                        checked={tripType === "roundTrip"}
                        onChange={handleTripTypeChange}
                      />
                      <label htmlFor="roundTrip">Round Trip</label>
                    </span>
                    <span>
                      <input
                        type="radio"
                        id="oneWay"
                        name="tripType"
                        value="oneWay"
                        checked={tripType === "oneWay"}
                        onChange={handleTripTypeChange}
                      />
                      <label htmlFor="oneWay">One Way</label>
                    </span>
                    <span>
                      |
                      <a href="/flight-booking">
                        Multi-city{" "}
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </span>
                  </FlightType>
                )}

                {/* from and to INput */}
                <FlightInputContainer class="flight-wrapper">
                  {/* takeoff input */}
                  <FlightInputAndDropDown>
                    <FlightInputWrapper onClick={handleShowFlightInputsA}>
                      <input
                        id="from-input"
                        type="text"
                        placeholder="From"
                        value={takeOffAirport}
                        onChange={handleKickOff}
                      />
                      <span>
                        <MdFlightTakeoff />
                      </span>
                    </FlightInputWrapper>

                    {/*  Takeoff Airport Dropdown*/}
                    {showTakeOffAirports && (
                      <TakeOffWrapper>
                        <LocationDropdown
                          onChange={onChangeTakeOffHandler}
                          items={takeOffAportList}
                          searchInputValue={searchTakeOffInputValue}
                          setAirportSelected={setTakeOffAirport}
                          setCityCode={setOriginLocationCode}
                          onCloseDropdwon={onCloseTakOffDropdwon}
                          Icon={<MdFlightTakeoff />}
                        />
                      </TakeOffWrapper>
                    )}
                  </FlightInputAndDropDown>

                  <RoundTripImg>
                    <img src={roundtrip} alt="trip icon" />
                  </RoundTripImg>

                  {/*Destination input  */}
                  <FlightInputAndDropDown>
                    <FlightInputWrapper onClick={handleShowFlightInputsB}>
                      <input
                        type="text"
                        placeholder="To"
                        value={destinationAirport}
                        onChange={handleDestination}
                      />
                      <span>
                        <MdFlightLand />
                      </span>
                    </FlightInputWrapper>

                    {/* dropdown */}
                    {showDestinationAirports && (
                      <DestinationWrapper>
                        <LocationDropdown
                          onChange={onChangeDestinationHandler}
                          items={destinationAriporList}
                          searchInputValue={searchDestinationInputValue}
                          setAirportSelected={setDestinationAirport}
                          setCityCode={setDestinationLocationCode}
                          onCloseDropdwon={onCloseDestinationDropdwon}
                          Icon={<MdFlightLand />}
                        />
                      </DestinationWrapper>
                    )}
                  </FlightInputAndDropDown>
                </FlightInputContainer>

                {/* <!-- Depature and destination container --> */}
                {showFlightInputs && (
                  <FlightDepartWrapper>
                    <FlightDepatWrapContent>
                      <Label for="depart">Departing</Label>
                      <input
                        type="date"
                        id="depart"
                        onChange={handleDepartureDate}
                        value={departDate}
                      />
                    </FlightDepatWrapContent>

                    {showReturnDate && (
                      <FlightDepatWrapContent>
                        <Label for="depart">Returning</Label>
                        <input
                          type="date"
                          id="return"
                          onChange={handleReturnDate}
                          value={returnDate}
                        />
                      </FlightDepatWrapContent>
                    )}

                    <FlightDepatWrapContent>
                      <FlightPassengerWrapper>
                        <FlightPassengerClass
                          onClick={() => setShowPassenger(!showPassenger)}
                        >
                          <span>Passenger and Class</span>
                          <div>
                            <strong>
                              <span id="passengerValue">{overallCount}</span>{" "}
                              passenger and{" "}
                              <span id="classValue">{flightClass}</span>{" "}
                            </strong>
                          </div>
                        </FlightPassengerClass>
                        {/* Passengers */}{" "}
                        {showPassenger && (
                          <FlightPassengerContent>
                            <PassengerWrapper>
                              <h3>Passengers</h3>
                              {/* <!-- number of adults --> */}
                              <PassengerData
                                title={"Adults"}
                                Subtitle={"12y and up"}
                                value={passengerCount}
                                reduceFunc={handlePassengerReduce}
                                addFunc={handlePassengerAdd}
                              />

                              {/* <!-- number of children --> */}
                              <PassengerData
                                title={"Children"}
                                Subtitle={"Ages (2y-11y)"}
                                value={childrenCount}
                                reduceFunc={handleChildrenReduce}
                                addFunc={handleChildrenAdd}
                              />

                              {/* <!-- number of Infants --> */}
                              <PassengerData
                                title={"Infants"}
                                Subtitle={"Below 2y"}
                                value={infantCount}
                                reduceFunc={handleInfantReduce}
                                addFunc={handleInfantAdd}
                              />

                              <hr />
                              <h3>Class</h3>
                              <FlightClass
                                name="flightClass"
                                value="ECONOMY"
                                isChecked={flightClass === "ECONOMY"}
                                onChange={handleFlightClassChange}
                              />

                              <FlightClass
                                name="flightClass"
                                value="PREMIUM_ECONOMY"
                                isChecked={flightClass === "PREMIUM_ECONOMY"}
                                onChange={handleFlightClassChange}
                              />

                              <FlightClass
                                name="flightClass"
                                value="BUSINESS"
                                isChecked={flightClass === "BUSINESS"}
                                onChange={handleFlightClassChange}
                              />

                              <FlightClass
                                name="flightClass"
                                value="FIRST"
                                isChecked={flightClass === "FIRST"}
                                onChange={handleFlightClassChange}
                              />

                              {/* Continue Button */}
                              <div>
                                <Button
                                  text={"Continue"}
                                  onClick={() => setShowPassenger(false)}
                                />
                              </div>
                            </PassengerWrapper>
                          </FlightPassengerContent>
                        )}
                      </FlightPassengerWrapper>
                    </FlightDepatWrapContent>

                    <div>
                      <Button onClick={bookflights} text={"Search Flight"} />
                    </div>
                  </FlightDepartWrapper>
                )}
              </FlightForm>
            </ContentMain>
          </FlightFormSectionContent>
        </FlightFormSection>
      </HeroSection>
    </FlightWrapper>
  );
}
