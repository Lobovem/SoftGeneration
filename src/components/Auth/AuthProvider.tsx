import { signInWithPopup, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { auth, googleAuthProvider } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { dbFirestore } from '../../dbFirestore';
import { useAppDispatch } from '../../store/appDispatch';
import { addCurrentUser } from '../../store/slices';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const AuthProvider = () => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector((state: RootState) => state.softGeneration.currentUser);

  const saveDataToFirestore = async () => {
    await addDoc(collection(dbFirestore, 'wishListCities'), {
      title: 'Kira',
      age: 6,
    });
    alert('add to base');
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser != null) {
        return dispatch(addCurrentUser(maybeUser));
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
      <button onClick={saveDataToFirestore}>safe</button>
    </div>
  );
};
