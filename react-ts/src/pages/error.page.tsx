import * as React from 'react';
import { styled } from '@mui/material';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorMessageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorMessageContainer>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText}</i>
        </p>
      </ErrorMessageContainer>
    );
  } else if (error instanceof Error) {
    return (
      <ErrorMessageContainer>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </ErrorMessageContainer>
    );
  } else {
    return (
      <ErrorMessageContainer>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </ErrorMessageContainer>
    );
  }
};
