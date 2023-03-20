import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import About from './About';

describe('About us', () => {
  it('Renders welcome', () => {
    render(<About />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Welcome to my page !');
  });
  it('Renders h3', () => {
    render(<About />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Choose the page you would like to visit');
  });
});
