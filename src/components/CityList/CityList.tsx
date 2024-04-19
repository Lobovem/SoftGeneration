import { Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch } from '../../store/appDispatch';
import { useEffect, useState } from 'react';
import { fetchCityList, fetchDataFromFireStore } from '../../store/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getDocs } from 'firebase/firestore';
import { colRef } from '../../dbFirestore';

export const CityList = () => {
  const dispatch = useAppDispatch();
  const data = useSelector((state: RootState) => state.softGeneration.test);
  const isLoading = useSelector((state: RootState) => state.softGeneration.isLoadingTest);
  console.log('data', data);

  // useEffect(() => {
  //   dispatch(fetchCityList());
  // }, []);

  useEffect(() => {
    dispatch(fetchDataFromFireStore());
  }, []);
  return (
    <Container>
      <Row>
        <Col lg={4}>test</Col>

        <Col lg={4}>
          {isLoading ? (
            <p>Loading</p>
          ) : (
            data?.map((item) => (
              <>
                <span key={item.id}>{item.title} - </span>
                <span key={item.id}>{item.age} </span>
              </>
            ))
          )}
        </Col>

        <Col lg={4}>test</Col>
      </Row>
    </Container>
  );
};
