import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./features/myApi";
import { other } from "./features/otherApi";
import formReducer from "./features/formTicketsSlice";
import catalogTrainsReducer from "./features/catalogTrainsSlice";
import passengersReducer from "./features/passengersSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [other.reducerPath]: other.reducer,
    formTickets: formReducer,
    catalogTrains: catalogTrainsReducer,
    passengers: passengersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, other.middleware),
});

setupListeners(store.dispatch);

export default store;
