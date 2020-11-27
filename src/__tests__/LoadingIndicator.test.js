import React from 'react';
import { render } from '@testing-library/react';
import { LoadingIndicator } from 'components/shared';

it('should take a snapshot', () => {
  const { asFragment } = render(<LoadingIndicator />);
  expect(asFragment()).toMatchSnapshot();
});

it('should have an overlay', () => {
  const { asFragment } = render(<LoadingIndicator withOverlay />);
  expect(asFragment().firstChild).toHaveClass('overlay-0-2-1');
});