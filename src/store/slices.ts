import { createSlice } from '@reduxjs/toolkit'
import { fetchCityList, fetchDataFromFireStore } from './api';

export interface IState {
  test: any[] | undefined,
  city: ICity[];
  detailCity: ICity[],
  isLoadingCity: boolean,
  isLoadingTest: boolean,
  isLoadingdetailCity: boolean,
  errorCity: string | null;
  errorDetailCity: string | null;
}

const initialState: IState = {
  test: [],
  city: [],
  detailCity: [],
  isLoadingCity: false,
  isLoadingdetailCity: false,
  isLoadingTest: false,
  errorCity: null,
  errorDetailCity: null
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
    builder
      .addCase(fetchCityList.pending, (state) => {
        state.isLoadingCity = true;
        state.errorCity = null;
      })

      .addCase(fetchCityList.fulfilled, (state, action) => {
        state.isLoadingCity = false;
        state.errorCity = null;
        state.city = action.payload
      })

      .addCase(fetchCityList.rejected, (state, action) => {
        state.isLoadingCity = false;
        state.errorCity = action.error.message ?? 'Failed to fetch city list';
      })

    builder
      .addCase(fetchDataFromFireStore.pending, (state) => {
        state.isLoadingTest = true;
        state.errorCity = null;
      })

      .addCase(fetchDataFromFireStore.fulfilled, (state, action) => {
        state.isLoadingTest = false;
        state.errorCity = null;
        state.test = action.payload
        console.log(action.payload);

      })

      .addCase(fetchDataFromFireStore.rejected, (state, action) => {
        state.isLoadingTest = false;
        state.errorCity = action.error.message ?? 'Failed to fetch city list';
      })
  }
})

export const { testReducer } = softGenerationSlice.actions
export default softGenerationSlice.reducer