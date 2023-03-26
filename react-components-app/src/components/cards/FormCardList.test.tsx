/* eslint-disable react/jsx-key */
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCard from '../card/FormCard';
import { IFormItem } from '../../types/item';
import FormCardList from './FormCardList';

describe('FormCard', () => {
  it('Renders card list', () => {
    const cards: IFormItem[] = [
      {
        id: 1,
        name: 'test name 1',
        description: 'test',
        color: 'Черный',
        status: 'Да',
        addInfo: ['тест, тест'],
        imageURL: 'test.png',
      },
      {
        id: 2,
        name: 'test name 1',
        description: 'test',
        color: 'Черный',
        status: 'Да',
        addInfo: ['тест, тест'],
        imageURL: 'test.png',
      },
    ];
    render(<FormCardList cardsToDisplay={cards} />);
    expect(screen.getByText(/Количество карточек: 2/i)).toBeDefined();
  });
  it('Renders empty list', () => {
    render(<FormCardList cardsToDisplay={[]} />);
    expect(screen.getByText(/Количество карточек: 0/i)).toBeDefined();
  });
});
