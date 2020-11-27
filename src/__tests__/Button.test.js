import React from 'react';
import { render } from '@testing-library/react';
import { Button } from 'components/shared';

it('should take a snapshot', () => {
  const { asFragment } = render(<Button title="test button" />)
  expect(asFragment()).toMatchSnapshot();
});