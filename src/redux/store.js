import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "./auth/authSlice";
import daySummaryReducer from "./dairy/dairyReducer";
import loaderReducer from '../redux/loaderReducer/loaderSlice'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}
const persistedReducer = persistReducer(authPersistConfig,AuthReducer)

export const store = configureStore({
  reducer: {
  auth: persistedReducer,
  dairy: daySummaryReducer,
  loader:loaderReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  ],
  devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);