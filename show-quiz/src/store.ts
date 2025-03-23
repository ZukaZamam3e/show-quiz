import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducer from "./slices/isLoading";
import errorsReducer from "./slices/errorsSlice";
import popupSlice from "./slices/popupSlice";

export default configureStore({
  reducer: {
    isLoading: isLoadingReducer,
    errors: errorsReducer,
    popup: popupSlice,
  },
});
