import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { app, googleAuthProvider } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { dbFirestore } from '../../dbFirestore';

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [userrr, setUser] = useState<string | null>(null);

  const saveDataToFirestore = async () => {
    await addDoc(collection(dbFirestore, 'wishListCities'), {
      title: 'Kira',
      age: 6,
    });
    alert('add to base');
  };

  // useEffect(() => {
  const signIn = () =>
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setUser(user.displayName);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);

        // ...
      });

  const exit = () =>
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });

  return (
    <div>
      <div>{userrr != null && <p>{userrr}</p>} </div>
      <button onClick={signIn}>Sign In</button>
      <button onClick={exit}>Sign Out</button>
      <button onClick={saveDataToFirestore}>safe</button>
    </div>
  );
};
