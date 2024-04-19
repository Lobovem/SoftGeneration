import { Link, useRouteError } from 'react-router-dom';
import { FC } from 'react';

interface IRouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

export const ErrorPage: FC = () => {
  const error = useRouteError() as IRouteError;

  return (
    <div
      id="error-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Home</Link>
    </div>
  );
};
