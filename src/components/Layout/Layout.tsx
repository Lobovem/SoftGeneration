import { Col, Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import { NavigationBar } from '../NavigationBar/NavigationBar';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Container>
          <Row>
            <Col lg={2} className="leftSide">
              <NavigationBar />
            </Col>

            <Col lg={10}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
