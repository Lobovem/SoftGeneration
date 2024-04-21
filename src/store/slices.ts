import { createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth';
// import { fetchWishListCitiesFromFireStore } from './api';
import firebase from 'firebase/compat/app';

export interface IState {
  // city: ICity[];
  // detailCity: ICity[],
  // isLoadingCity: boolean,
  // isLoadingdetailCity: boolean,
  // errorCity: string | null;
  cityList: [],
  currentUser: User | null,
  wishListCities: any[] | null,
  isLoadingWishListCities: boolean,
  errorWishListCities: string | null;
}

const initialState: IState = {
  // city: [],
  // detailCity: [],
  // isLoadingCity: false,
  // isLoadingdetailCity: false,
  // errorCity: null,
  cityList: [],
  currentUser: null,
  wishListCities: [],
  isLoadingWishListCities: false,
  errorWishListCities: null
}

export const softGenerationSlice = createSlice({
  name: 'softGeneration',
  initialState,
  reducers: {
    testReducer: (state, action) => {
      // state.test = action.payload
    },

    addCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },

    addListCity: (state, action) => {
      state.wishListCities = action.payload
    },
  },

  // extraReducers: (builder) => {
  //   // builder
  //   //   .addCase(fetchCityList.pending, (state) => {
  //   //     state.isLoadingCity = true;
  //   //     state.errorCity = null;
  //   //   })

  //   //   .addCase(fetchCityList.fulfilled, (state, action) => {
  //   //     state.isLoadingCity = false;
  //   //     state.errorCity = null;
  //   //     state.city = action.payload
  //   //   })

  //   //   .addCase(fetchCityList.rejected, (state, action) => {
  //   //     state.isLoadingCity = false;
  //   //     state.errorCity = action.error.message ?? 'Failed to fetch city list';
  //   //   })



  //   // builder
  //   //   .addCase(fetchWishListCitiesFromFireStore.pending, (state) => {
  //   //     state.isLoadingWishListCities = true;
  //   //     state.errorWishListCities = null;
  //   //   })

  //   //   .addCase(fetchWishListCitiesFromFireStore.fulfilled, (state, action) => {
  //   //     state.isLoadingWishListCities = false;
  //   //     state.errorWishListCities = null;
  //   //     state.wishListCities = action.payload
  //   //     console.log(action.payload);

  //   //   })

  //   //   .addCase(fetchWishListCitiesFromFireStore.rejected, (state, action) => {
  //   //     state.isLoadingWishListCities = false;
  //   //     state.errorWishListCities = action.error.message ?? 'Failed to fetch wish list cities';
  //   //   })
  // }
})

export const { testReducer, addCurrentUser, addListCity } = softGenerationSlice.actions
export default softGenerationSlice.reducer