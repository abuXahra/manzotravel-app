import { create } from "zustand";

// const domain = "http://localhost:4000";
const domain = "https://backend.lillybeautyfashion.com";
export const useAuthStore = create((set) => ({
  // Load isLoggedIn state from localStorage if available
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  flightResult: [],
  setIsLoggedIn: (bool) => {
    set({ isLoggedIn: bool });
    localStorage.setItem("isLoggedIn", bool.toString());
  },
  setFlightResult: (obj) => set({ flightResult: obj }),
}));
