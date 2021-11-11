import { render } from '@testing-library/react';
import React from 'react';
import Home from '../../pages';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
