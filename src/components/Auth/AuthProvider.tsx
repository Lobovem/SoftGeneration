import { signInWithPopup, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { auth, dbFirestore, googleAuthProvider } from '../../firebase';
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

  const signIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => dispatch(addCurrentUser(credentials.user)))
      .catch((e) => console.log(e));
  };

  const exit = () =>
    signOut(auth)
      .then(() => {
        dispatch(addCurrentUser(null));
      })

      .catch((error) => {
        console.log(error);
      });

  return (
    <div>
      <div>{currentUser != null && <p>{currentUser.displayName}</p>} </div>
      <button onClick={signIn}>Sign In</button>
      <button onClick={exit}>Sign Out</button>
      <button onClick={addCityToFirestore}>safe</button>
    </div>
  );
};
