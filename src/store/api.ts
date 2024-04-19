import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICity } from '../types/types'
import { getDocs } from 'firebase/firestore'
import { colRef } from '../dbFirestore'
import { test } from './slices'
import { useAppDispatch } from '../store/appDispatch'

const API_URL: string = "https://openweathermap.org/"

export const fetchCityList = createAsyncThunk(
  'city', async () => {

    try {
      const cityList = await fetch(`${API_URL}`)

      if (!cityList.ok) {
        throw new Error('Error fetching news list');
      }

      const result = await cityList.json()
      return result
      console.log(result);

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

export const fetchDataFromFireStore = createAsyncThunk("dataFromFireStore", async () => {

  try {
    const querySnapShot = await getDocs(colRef);
    const result = [];
    querySnapShot.docs.forEach((doc) => {
      result.push({ ...doc.data(), id: doc.id });
    });

    return result
    // dispatch(test(result))
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
})




