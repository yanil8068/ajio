import { configureStore } from "@reduxjs/toolkit";
import allProductReducer  from "../Redux/Electronics/allProductSlice";
import usersReducer from "../Redux/Authentication/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    allElectronicsProduct: allProductReducer,
  },
});
