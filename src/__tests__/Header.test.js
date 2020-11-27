import React from 'react';
import { render } from '@testing-library/react';
import { Header } from 'components';

it('should take a snapshot', () => {
  const { asFragment } = render(<Header />)
  expect(asFragment()).toMatchSnapshot();
});
