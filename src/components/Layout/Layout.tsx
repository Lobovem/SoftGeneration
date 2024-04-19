import { Col, Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Container>
          <Row>
            <Col lg={12}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
