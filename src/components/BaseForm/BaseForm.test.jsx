import React from 'react';
import { render } from '@testing-library/react';
import BaseForm from './BaseForm.jsx';

it('should render form', () => {
  const { container } = render(<BaseForm />);
  expect(container).toMatchSnapshot();
});
