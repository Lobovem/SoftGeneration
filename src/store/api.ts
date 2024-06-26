import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { dbFirestore } from '../firebase'
import { useAppDispatch } from './appDispatch'
import { addListCity } from './slices'

const API_URL: string = "https://openweathermap.org/"

// export const fetchCityList = createAsyncThunk(
//   'city', async () => {

//     try {
//       const cityList = await fetch(`${API_URL}`)

//       if (!cityList.ok) {
//         throw new Error('Error fetching news list');
//       }

//       const result = await cityList.json()
//       return result
//       console.log(result);

//     }
//     catch (error) {
//       throw new Error('Error fetching news list');
//     }
//   })

// export const fetchCityDetail = createAsyncThunk(
//   'cityDetail', async (id: string | undefined) => {

//     try {
//       const cityResponse = await fetch(`${API_URL}city/${id}`)

//       if (!cityResponse.ok) {
//         throw new Error('Error fetching news list');
//       }

//       const result = await cityResponse.json()
//       return result
//     }
//     catch (error) {
//       throw new Error('Error fetching news list');
//     }
//   })

// export const fetchWishListCitiesFromFireStore = createAsyncThunk("dataFromFireStore", async (uid) => {
//   const dispatch = useAppDispatch();

//   // try {
//   //   const citiesCol = collection(dbFirestore, 'wishListCities');
//   //   // const q = query(citiesCol, where("uid", "==", uid)); // Замените "uid" на ваше поле, содержащее UID пользователя
//   //   const citySnapshot = await getDocs(citiesCol);
//   //   const cityList = citySnapshot.docs.map(doc => doc.data());
//   //   return cityList;
//   try {
//     // const citiesCol = doc(dbFirestore, 'wishListCities');
//     // // const q = query(citiesCol, where("uid", "==", uid)); // Замените "uid" на ваше поле, содержащее UID пользователя
//     // const citySnapshot = onSnapshot(citiesCol, (city) => {
//     //   console.log(city.data());
//     //   if (city.exists()) {

//     //     dispatch(addListCity(city.data()))
//     //   } else {
//     //     console.log('not items');
//     //   }
//     // });
//     // const cityList = citySnapshot.docs.map(doc => doc.data());
//     // return cityList;


//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//   }
// })




