import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('Form', () => {
  it('form rendering', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Form');
  });

  it('submit form', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    window.URL.createObjectURL = vi.fn();

    const btn = screen.getByRole('button');
    const nameInput = screen.getByRole('textbox', {
      name: /Название/i,
    });
    const descripionInput = screen.getByRole('textbox', {
      name: /Описание/i,
    });
    const dateInput = screen.getByLabelText('Дата добавления');
    const select = screen.getByRole('combobox');
    const radioInput = screen.getByRole('radio', {
      name: /Да/i,
    });
    const checkboxInput = screen.getByRole('checkbox', {
      name: /Быстрая доставка/i,
    });
    const imageInput = screen.getByLabelText('Выберите фото товара:');

    await userEvent.type(nameInput, 'test');
    await userEvent.type(descripionInput, 'test 1');
    await userEvent.type(dateInput, '2020-03-01');
    await userEvent.selectOptions(select, 'Зеленый');
    await userEvent.click(radioInput);
    await userEvent.click(checkboxInput);
    await userEvent.upload(imageInput, new File(['hello'], 'hello.png', { type: 'image/png' }));

    await userEvent.click(btn);

    expect(screen.getByText(/Количество карточек: 1/i)).toBeDefined();
  });

  it('checkbox 2 options checked', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const checkboxInput1 = screen.getByRole('checkbox', {
      name: /Быстрая доставка/i,
    });
    const checkboxInput2 = screen.getByRole('checkbox', {
      name: /Оригинальная вещь/i,
    });

    await userEvent.click(checkboxInput1);
    await userEvent.click(checkboxInput2);

    expect(screen.getByLabelText('Быстрая доставка')).toBeChecked();
    expect(screen.getByLabelText('Оригинальная вещь')).toBeChecked();
  });
});
