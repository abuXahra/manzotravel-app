import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./context/ScrollTop";
import Header from "./components/head/header/Header";
import Profile from "./pages/auth/profile/Profile";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home/HomePage";
import Affiliate from "./pages/affiliate/Affiliate";
import Login from "./pages/auth/login/Login";
import FlightResult from "./pages/flight/flight_result/FlightResult";
import TripInfo from "./pages/flight/flight_result/trip_info/TripInfo";
import FlightBooking from "./pages/flight/flight_booking/FlightBooking";
import HotelBooking from "./pages/hotel/hotel_booking/HotelBooking";
import Visa from "./pages/visa/Visa";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/h" element={<FlightResult />} />
            <Route path="/" element={<FlightBooking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/flight-booking" element={<FlightBooking />} />
            <Route path="/flight-result" element={<FlightResult />} />
            <Route path="/hotel-reservation" element={<HotelBooking />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route
              path="/trip-info/:flightResultIndex"
              element={<TripInfo />}
            />
          </Routes>
          <Footer /> {/*hide footer for login page */}
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
