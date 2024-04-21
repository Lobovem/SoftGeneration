import { Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch } from '../../store/appDispatch';
import { useEffect } from 'react';
import { fetchWishListCitiesFromFireStore } from '../../store/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const CityList = () => {
  const dispatch = useAppDispatch();
  const wishListCities = useSelector(
    (state: RootState) => state.softGeneration.wishListCities
  );
  const isLoading = useSelector(
    (state: RootState) => state.softGeneration.isLoadingWishListCities
  );

  useEffect(() => {
    dispatch(fetchWishListCitiesFromFireStore());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col lg={4}>test</Col>

        <Col lg={4}>
          {isLoading ? (
            <p>Loading</p>
          ) : (
            wishListCities?.map((item) => (
              <div key={item.id}>
                <div>{item.title}</div>
                <div>{item.age} </div>
              </div>
            ))
          )}
        </Col>

        <Col lg={4}>test</Col>
      </Row>
    </Container>
  );
};
