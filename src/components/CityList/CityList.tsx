import { Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch } from '../../store/appDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { doc, onSnapshot } from 'firebase/firestore';
import { dbFirestore } from '../../firebase';
import { addListCity } from '../../store/slices';

export const CityList = () => {
  const dispatch = useAppDispatch();
  const wishListCities = useSelector(
    (state: RootState) => state.softGeneration.wishListCities
  );
  const isLoading = useSelector(
    (state: RootState) => state.softGeneration.isLoadingWishListCities
  );
  const currentUser = useSelector((state: RootState) => state.softGeneration.currentUser);
  console.log('curent', currentUser);

  useEffect(() => {
    // dispatch(fetchWishListCitiesFromFireStore(currentUser.uid));
    if (currentUser) {
      const citiesCol = doc(dbFirestore, `wishListCities/${currentUser.uid}`);
      const citySnapshot = onSnapshot(citiesCol, (city) => {
        if (city.exists()) {
          dispatch(addListCity(city.data().list));
        }
      });

      return () => {
        citySnapshot();
      };
    } else {
      dispatch(addListCity([]));
    }
  }, [currentUser, dispatch]);

  return (
    <Container>
      <Row>
        <Col lg={4}>section</Col>

        <Col lg={4}>
          {isLoading ? (
            <p>Loading</p>
          ) : (
            wishListCities?.map((item, index) => (
              <div key={index}>
                <span>{item.title} - </span>
                <span>{item.age} </span>
              </div>
            ))
          )}
        </Col>

        <Col lg={4}>test</Col>
      </Row>
    </Container>
  );
};
