import { Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch } from '../../store/appDispatch';
import { useEffect, useState } from 'react';
import { fetchCityList } from '../../store/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getDocs } from 'firebase/firestore';
import { colRef } from '../../dbFirestore';

export const CityList = () => {
  // const dispatch = useAppDispatch();
  // const list = useSelector((state: RootState) => state.softGeneration.city);

  // useEffect(() => {
  //   dispatch(fetchCityList());
  // }, []);

  const [data, setData] = useState();

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        const result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        // console.log('result', result);

        setData(result);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <Row>
        <Col lg={4}>test</Col>

        <Col lg={4}>
          {data?.map((item) => (
            <>
              <span key={item.id}>{item.title} - </span>
              <span key={item.id}>{item.age} </span>
            </>
          ))}
        </Col>

        <Col lg={4}>test</Col>
      </Row>
    </Container>
  );
};
