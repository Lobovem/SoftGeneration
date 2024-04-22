import { useEffect } from 'react';
import { auth, dbFirestore } from '../../firebase';
import { useAppDispatch } from '../../store/appDispatch';
import { addCurrentUser } from '../../store/slices';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { doc, setDoc } from 'firebase/firestore';

export const AuthProvider = () => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector((state: RootState) => state.softGeneration.currentUser);

  const wishListCities = [
    { title: 'Kira', age: 6 },
    { title: 'Oleg', age: 41 },
  ];

  const city = {
    title: 'Lobov',
    age: 8,
  };

  const addCityToFirestore = async () => {
    try {
      if (currentUser) {
        const cityRef = doc(dbFirestore, 'wishListCities', currentUser.uid);
        await setDoc(cityRef, { list: [...wishListCities, city] }, { merge: true });
        alert('add to base');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user !== null) {
        return dispatch(addCurrentUser(user));
      }
    });
    return unsub;
  }, [dispatch]);

  return (
    <div>
      <button onClick={addCityToFirestore}>safe</button>
    </div>
  );
};
