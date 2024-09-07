import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "../Redux/Authentication/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
