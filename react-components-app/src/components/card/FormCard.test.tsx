import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

describe('FormCard', () => {
  it('Renders form card', () => {
    render(
      <FormCard
        id={1}
        name={'test name'}
        description={'test'}
        color={'Красный'}
        status={'Да'}
        addInfo={['Тест', 'тест']}
        imageURL={'test.png'}
      />
    );
    expect(screen.getByText(/test name/i)).toBeDefined();
  });
});
