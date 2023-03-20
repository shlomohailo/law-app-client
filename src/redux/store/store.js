import { configureStore } from "@reduxjs/toolkit";
import ServicesReducer from "../slices/services/services";
import SubServicesReducer from "../slices/subServices/sucServices";
import RecommendationsReducer from "../slices/recommondetions/recommondetions";

import ordersReducer from "../slices/orders/orders";
import userSlice from '../slices/users/userSlice';
export const store = configureStore({
  reducer: {
    services: ServicesReducer,
    subServices: SubServicesReducer,
    recommendations: RecommendationsReducer,
  
    orders: ordersReducer,
    users: userSlice
  },
});
