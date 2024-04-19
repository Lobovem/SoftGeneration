import { collection, getDocs, getFirestore } from "firebase/firestore";

// const dbFirestore = getFirestore()
// const colRef = collection(dbFirestore, 'data')
// getDocs(colRef)
//   .then((snapshot) => {
//     const result = []
//     snapshot.docs.forEach((doc) => {
//       result.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(result);
//   })

//   .catch(error => {
//     console.log(error);
//   })

export const dbFirestore = getFirestore();
export const colRef = collection(dbFirestore, 'data');