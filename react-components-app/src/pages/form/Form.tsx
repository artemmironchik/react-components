import React, { useState } from 'react';
import { IFormItem } from '../../types/item';
import FormCardList from '../../components/cards/FormCardList';
import InputText from '../../components/inputText/InputText';
import InputDate from '../../components/inputDate/InputDate';
import Select from '../../components/select/Select';
import Radio from '../../components/radio/Radio';
import Checkbox from '../../components/checkbox/Checkbox';

import { COLORS } from '../../utils/constValues';
import { RADIO_LABELS, RADIO_LABELS_ID } from '../../utils/constValues';
import { CHECKBOX_VALUES, CHECKBOX_VALUES_ID } from '../../utils/constValues';
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
  color: string;
  stock: string;
  addInfo: string[];
}

export default function Form() {
  const [cards, setCards] = useState<IFormItem[]>([]);

  const {
    register,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: 'all',
  });

  const handleSubmitForm = (data: FormValues) => {
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
          onSubmit={handleSubmit(handleSubmitForm)}
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
              form={{ errors, name: 'description', register }}
              label="Описание"
              placeholder="Черная майка из хлопка"
            />
          </div>
          <div className="-mx-3 mb-6">
            <InputDate<FormValues>
              form={{ errors, name: 'date', register }}
              label="Дата добавления"
            />
          </div>
          <div className="-mx-3 mb-2">
            <Select<FormValues>
              form={{ errors, name: 'color', register }}
              label="Цвет"
              values={COLORS}
            />
          </div>
          <div className="-mx-3 mb-6 mt-6">
            <Radio<FormValues>
              form={{ errors, name: 'stock', register }}
              labels={RADIO_LABELS}
              labels_id={RADIO_LABELS_ID}
              title="Есть в наличии"
            />
          </div>
          <div className="-mx-3 mb-6 mt-6">
            <Checkbox<FormValues>
              form={{ errors, name: 'addInfo', register }}
              values={CHECKBOX_VALUES}
              values_id={CHECKBOX_VALUES_ID}
              title="Дополнительная информация"
            />
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
      <FormCardList cardsToDisplay={cards} />
    </div>
  );
}
