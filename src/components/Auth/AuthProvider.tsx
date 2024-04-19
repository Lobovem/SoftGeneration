import { getAuth, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { app, googleAuthProvider } from '../../firebase';

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser != null) {
        return setUser(maybeUser);
      }
      signInWithPopup(auth, googleAuthProvider)
        .then((credentials) => setUser(credentials.user))
        .catch((e) => console.log(e));
    });

    return unsub;
  }, [auth]);

  return <div>{user != null ? <p>{user.displayName}</p> : <p>loading...</p>}</div>;
};
