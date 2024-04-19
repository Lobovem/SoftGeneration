import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICity } from '../types/types'

const API_URL: string = "https://openweathermap.org/"

export const fetchCityList = createAsyncThunk(
  'city', async () => {

    try {
      const cityList = await fetch(`${API_URL}city`)

      if (!cityList.ok) {
        throw new Error('Error fetching news list');
      }

      const result = await cityList.json()
      return result
    }
    catch (error) {
      throw new Error('Error fetching news list');
    }
  })

export const fetchCityDetail = createAsyncThunk(
  'cityDetail', async (id: string | undefined) => {

    try {
      const cityResponse = await fetch(`${API_URL}city/${id}`)

      if (!cityResponse.ok) {
        throw new Error('Error fetching news list');
      }

      const result = await cityResponse.json()
      return result
    }
    catch (error) {
      throw new Error('Error fetching news list');
    }
  })




