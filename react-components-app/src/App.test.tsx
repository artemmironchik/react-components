import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter, createMemoryRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import routes from './routeConfig';

describe('App', () => {
  it('full app rendering/navigating', async () => {
    render(<App />);
    const user = userEvent.setup();

    expect(screen.getByRole('input')).toBeInTheDocument();

    await user.click(screen.getByText(/About Us/i));
    expect(screen.getByText(/Welcome to my page !/i)).toBeInTheDocument();
  });

  it('landing on a bad page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/some/bad/route'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
