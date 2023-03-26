/* eslint-disable react/jsx-key */
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('FormCard', () => {
  it('Renders empty list', () => {
    render(<CardList cardsToDisplay={[]} />);
    expect(screen.getByText(/По вашему запросу ничего не найдено/i)).toBeDefined();
  });
});
