import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Logo } from '../Logo/Logo';
import './Header.scss';
import { AuthProvider } from '../Auth/AuthProvider';

export const Header: FC = () => {
  return (
    <header className="layout">
      <Container>
        <Row className="header">
          <Col xl={2} className="header__logo">
            <Logo />
          </Col>

          <Col xl={8} className="header__search"></Col>

          <Col xl={2} className="header__userAuth">
            <AuthProvider />
          </Col>
        </Row>
      </Container>
    </header>
  );
};
