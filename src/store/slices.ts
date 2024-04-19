import { createSlice } from '@reduxjs/toolkit'
import { fetchCityList } from './api';

export interface IState {
  test: string,
  city: ICity[];
  detailCity: ICity[],
  isLoadingCity: boolean,
  isLoadingdetailCity: boolean,
  errorCity: string | null;
  errorDetailCity: string | null;
}

const initialState: IState = {
  test: '',
  city: [],
  detailCity: [],
  isLoadingCity: false,
  isLoadingdetailCity: false,
  errorCity: null,
  errorDetailCity: null
}

export const softGenerationSlice = createSlice({
  name: 'softGeneration',
  initialState,
  reducers: {
    test: (state) => {
      state.test = '123'
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
  }
})

export const { test } = softGenerationSlice.actions
export default softGenerationSlice.reducer