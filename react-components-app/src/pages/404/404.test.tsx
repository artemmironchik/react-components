import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import NotFound from './404';

describe('NotFound', () => {
  it('Renders page not found', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Page not found');
  });
  it('Renders 404', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('404');
  });
});
