import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { app, googleAuthProvider } from '../../firebase';

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  // useEffect(() => {
  const signIn = () =>
    auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser != null) {
        return setUser(maybeUser);
      }
      signInWithPopup(auth, googleAuthProvider)
        .then((credentials) => setUser(credentials.user))
        .catch((e) => console.log(e));
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
      <div>{user != null && <p>{user.displayName}</p>} </div>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={exit}>Sign Out</button>
    </div>
  );
};
