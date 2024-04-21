import { createSlice } from '@reduxjs/toolkit'
import { fetchWishListCitiesFromFireStore } from './api';

export interface IState {
  // city: ICity[];
  // detailCity: ICity[],
  // isLoadingCity: boolean,
  // isLoadingdetailCity: boolean,
  // errorCity: string | null;
  wishListCities: any[] | undefined,
  isLoadingWishListCities: boolean,
  errorWishListCities: string | null;
}

const initialState: IState = {
  wishListCities: [],
  // city: [],
  // detailCity: [],
  // isLoadingCity: false,
  // isLoadingdetailCity: false,
  // errorCity: null,
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
  },

  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchCityList.pending, (state) => {
    //     state.isLoadingCity = true;
    //     state.errorCity = null;
    //   })

    //   .addCase(fetchCityList.fulfilled, (state, action) => {
    //     state.isLoadingCity = false;
    //     state.errorCity = null;
    //     state.city = action.payload
    //   })

    //   .addCase(fetchCityList.rejected, (state, action) => {
    //     state.isLoadingCity = false;
    //     state.errorCity = action.error.message ?? 'Failed to fetch city list';
    //   })



    builder
      .addCase(fetchWishListCitiesFromFireStore.pending, (state) => {
        state.isLoadingWishListCities = true;
        state.errorWishListCities = null;
      })

      .addCase(fetchWishListCitiesFromFireStore.fulfilled, (state, action) => {
        state.isLoadingWishListCities = false;
        state.errorWishListCities = null;
        state.wishListCities = action.payload
        console.log(action.payload);

      })

      .addCase(fetchWishListCitiesFromFireStore.rejected, (state, action) => {
        state.isLoadingWishListCities = false;
        state.errorWishListCities = action.error.message ?? 'Failed to fetch wish list cities';
      })
  }
})

export const { testReducer } = softGenerationSlice.actions
export default softGenerationSlice.reducer