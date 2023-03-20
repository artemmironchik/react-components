import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from './routeConfig';
import App from './App';

describe('App', () => {
  it('full app rendering/navigating', () => {
    render(<App />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('rendering other page', async () => {
    render(<App />);

    const link = screen.getByRole('link', { name: /about/i });
    expect(link.getAttribute('href')).toBe('/about');
  });

  it('landing on a bad page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/some/bad/route'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
