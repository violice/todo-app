import React from 'react';
import { render } from '@testing-library/react';
import { TextField } from 'components/shared';

it('should take a snapshot', () => {
  const { asFragment } = render(<TextField value="test text" onChange={() => {}} />)
  expect(asFragment()).toMatchSnapshot();
});