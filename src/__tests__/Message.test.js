import React from 'react';
import { render } from '@testing-library/react';
import { Message } from 'components/shared';

it('should take a snapshot', () => {
  const { asFragment } = render(<Message value="test message" />)
  expect(asFragment()).toMatchSnapshot();
});