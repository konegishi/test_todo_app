import { render } from '@testing-library/react';
import React from 'react';
import NavBar from '../../components/NavBar';

describe('NavBar component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<NavBar />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
