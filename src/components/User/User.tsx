import Image from 'react-bootstrap/Image';
import userPhoto from '../../assets/img/userPhoto.png';
import { FC } from 'react';
import { NavLink } from 'react-bootstrap';
import './User.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { auth, googleAuthProvider } from '../../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useAppDispatch } from '../../store/appDispatch';
import { addCurrentUser } from '../../store/slices';

export const User: FC = () => {
  const currentUser = useSelector((state: RootState) => state.softGeneration.currentUser);
  const dispatch = useAppDispatch();

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
    <div className="user">
      {currentUser != null && <p>Hello {currentUser.displayName}</p>}
      <button onClick={signIn}>Sign In</button>
      <button onClick={exit}>Sign Out</button>

      <Image className="user__photo" src={userPhoto} roundedCircle />
      <NavLink className="user__settingIconWrap" href="#">
        <Image
          src="https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png"
          className="user__settingIcon"
          roundedCircle
        />
      </NavLink>
    </div>
  );
};
