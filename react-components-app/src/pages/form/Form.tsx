import React, { useState } from 'react';
import { IFormItem } from '../../types/item';
import FormCardList from '../../components/cards/FormCardList';
import InputText from '../../components/inputText/InputText';
import InputDate from '../../components/inputDate/InputDate';

import { COLORS } from '../../utils/constValues';
import { FieldErrors, FieldValues, Path, UseFormRegister, useForm } from 'react-hook-form';

export interface FormItemProps<T extends FieldValues> {
  name: Path<T>;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

interface FormValues {
  name: string;
  description: string;
  date: string;
}

export default function Form() {
  const [cards, setCards] = useState<IFormItem[]>([]);

  const {
    register,
    formState: { errors, isValid },
    getValues,
    reset,
  } = useForm<FormValues>({
    mode: 'all',
  });

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: IFormItem = {
      id: Math.floor(Math.random() * Date.now()),
      name: getValues('name'),
      description: getValues('description'),
      color: getValues('name'),
      status: getValues('name'),
      addInfo: [getValues('name')],
      imageURL: getValues('name'),
    };
    setCards((cards) => [...cards, user]);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center w-full">
        <form
          className="w-full max-w-lg bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4 mt-4"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmitForm(e)}
          noValidate
        >
          <h2 className="text-center font-bold">Form</h2>
          <div className="-mx-3 mb-6">
            <InputText<FormValues>
              form={{ errors, name: 'name', register }}
              label="Название"
              placeholder="Майка"
            />
            <InputText<FormValues>
              form={{ errors, name: 'name', register }}
              label="Описание"
              placeholder="Черная майка из хлопка"
            />
          </div>
          <div className="-mx-3 mb-6">
            <InputDate<FormValues>
              form={{ errors, name: 'name', register }}
              label="Дата добавления"
            />
          </div>
          <div className="-mx-3 mb-2">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="color"
              >
                Цвет
              </label>
              <div className="relative">
                <select
                  className={
                    'appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white mb-2' +
                    (errors.colorError ? 'border-red-500' : 'border-gray-200')
                  }
                  id="color"
                  ref={this.colorInput}
                  required
                >
                  {COLORS.map((color, index) => (
                    <option key={index}>{color}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {errors.colorError ? (
                <p className="text-red-500 text-xs italic mb-2">{errors.colorError}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="-mx-3 mb-6 mt-6">
            <div className="px-3">
              <p className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Есть на складе
              </p>
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="stock"
                  value="Да"
                  className="m-2"
                  ref={this.stockInput1}
                />
                <label htmlFor="yes">Да</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no"
                  name="stock"
                  value="Нет"
                  className="m-2"
                  ref={this.stockInput2}
                />
                <label htmlFor="no">Нет</label>
              </div>
              {errors.inStockError ? (
                <p className="text-red-500 text-xs italic mb-2">{errors.inStockError}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="-mx-3 mb-6 mt-6">
            <div className="px-3">
              <p className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Дополнительная информация
              </p>
              <div>
                <input
                  type="checkbox"
                  id="delivery"
                  name="delivery"
                  value="Быстрая доставка"
                  className="m-2"
                  ref={this.infoInput1}
                />
                <label htmlFor="delivery">Быстрая доставка</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="original"
                  name="original"
                  className="m-2"
                  value="Оригинальная вещь"
                  ref={this.infoInput2}
                />
                <label htmlFor="original">Оригинальная вещь</label>
              </div>
              {errors.infoError ? (
                <p className="text-red-500 text-xs italic mb-2">{errors.infoError}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="-mx-3 mb-10 mt-6">
            <div className="px-3">
              <label
                htmlFor="avatar"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Выберите фото товара:
              </label>

              <input type="file" id="avatar" name="avatar" accept="image/*" ref={this.imageInput} />
              {errors.imageError ? (
                <p className="text-red-500 text-xs italic mb-2">{errors.imageError}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Отправить форму
            </button>
          </div>
        </form>
      </div>
      <FormCardList cardsToDisplay={items} />
    </div>
  );
}
