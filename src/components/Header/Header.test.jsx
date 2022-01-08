import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from './Header.jsx';
import { UserProvider } from '../../context/UserContext.jsx';
//when mocking, look at the real component & find where you are calling code outside of your own application. (API call or backend call).

//follow the path, look for the mock inside mocks
//mock needs to match real path
//also telling it to look for a function inside of mock (a mock file function).
//mocking the functions that would hit the API
jest.mock('../../services/users.js');

//in the mock, there is no call to the backend.
//mockUser instead of getUser();
jest.mock('../../context/UserContext.jsx');

it('should render form', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});

it('should render form', () => {
  const { container } = render(
    <UserProvider mockUser={{ email: 's@s.com' }}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
