import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import './NavigationMenu.scss';

export const NavigationMenu: FC = () => {
  return (
    <Nav variant="underline" defaultActiveKey="#" className="navigationMenu">
      <Nav.Item className="navigationMenu__item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'navigationMenu__link navigationMenu__link_active'
              : 'navigationMenu__link'
          }
        >
          HOME
        </NavLink>
      </Nav.Item>

      <Nav.Item className="navigationMenu__item">
        <NavLink
          to="/wishListCities"
          className={({ isActive }) =>
            isActive
              ? 'navigationMenu__link navigationMenu__link_active'
              : 'navigationMenu__link'
          }
        >
          FAVORITE CITIES
        </NavLink>
      </Nav.Item>

      <Nav.Item className="navigationMenu__item">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? 'navigationMenu__link navigationMenu__link_active'
              : 'navigationMenu__link'
          }
        >
          SETTINGS
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};
