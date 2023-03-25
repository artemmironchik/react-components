/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { Component } from 'react';
import { IFormItem } from '../../types/item';
import FormCardList from '../../components/cards/FormCardList';

import { COLORS } from '../../utils/constValues';

interface FormProps {}
interface FormState {
  items: IFormItem[];
  errors: ReduceReturnType;
}

type ReduceReturnType = Record<string, string>;

class Form extends Component<FormProps, FormState> {
  textInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  descriptionInput: React.RefObject<HTMLInputElement>;
  colorInput: React.RefObject<HTMLInputElement>;
  stockInput: React.RefObject<HTMLInputElement>;
  infoInput: React.RefObject<HTMLInputElement>;
  imageInput: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.descriptionInput = React.createRef();
    this.colorInput = React.createRef();
    this.stockInput = React.createRef();
    this.infoInput = React.createRef();
    this.imageInput = React.createRef();
    this.state = {
      items: [],
      errors: {
        nameError: '',
        descriptionError: '',
        dateError: '',
        colorError: '',
        inStockError: '',
        infoError: '',
        imageError: '',
      },
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (
      this.textInput.current?.value &&
      this.dateInput.current?.value &&
      this.colorInput.current?.value &&
      this.descriptionInput.current?.value &&
      this.stockInput.current?.value &&
      this.infoInput.current?.value &&
      this.imageInput.current?.value
    ) {
      const user: IFormItem = {
        id: Math.floor(Math.random() * Date.now()),
        name: this.textInput.current.value,
        description: this.descriptionInput.current.value,
        color: this.colorInput.current.value,
        status: this.stockInput.current.value,
        addInfo: this.infoInput.current.value.split(''),
        imageURL: this.imageInput.current.value,
      };
      this.setState({
        items: [...this.state.items, user],
        errors: Object.keys(this.state.errors).reduce<ReduceReturnType>((acc, key) => {
          acc[key] = '';
          return acc;
        }, {}),
      });
      this.textInput.current.value = '';
      this.dateInput.current.value = '';
      this.descriptionInput.current.value = '';
      this.stockInput.current.value = '';
      this.colorInput.current.value = '';
      this.infoInput.current.value = '';
      this.imageInput.current.value = '';
    } else {
      if (!this.textInput.current?.value) {
        this.setState({
          errors: { ...this.state.errors, nameError: 'Это поле должно быть обязательно заполнено' },
        });
      }
      if (!this.dateInput.current?.value) {
        this.setState({
          errors: { ...this.state.errors, dateError: 'Это поле должно быть обязательно заполнено' },
        });
      }
      if (!this.descriptionInput.current?.value) {
        this.setState({
          errors: {
            ...this.state.errors,
            descriptionError: 'Это поле должно быть обязательно заполнено',
          },
        });
      }
      if (!this.colorInput.current?.value) {
        this.setState({
          errors: {
            ...this.state.errors,
            colorError: 'Это поле должно быть обязательно заполнено',
          },
        });
      }
      if (!this.stockInput.current?.value) {
        this.setState({
          errors: {
            ...this.state.errors,
            inStockError: 'Это поле должно быть обязательно заполнено',
          },
        });
      }
      if (!this.infoInput.current?.value) {
        this.setState({
          errors: { ...this.state.errors, infoError: 'Это поле должно быть обязательно заполнено' },
        });
      }
      if (!this.imageInput.current?.value) {
        this.setState({
          errors: {
            ...this.state.errors,
            imageError: 'Это поле должно быть обязательно заполнено',
          },
        });
      }
    }
    e.preventDefault();
  }

  render() {
    const { errors, items } = this.state;
    return (
      <div className="w-full">
        <div className="flex justify-center w-full">
          <form
            className="w-full max-w-lg bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4 mt-4"
            onSubmit={this.handleSubmit}
          >
            <h2 className="text-center font-bold">Form</h2>
            <div className="-mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Название
                </label>
                <input
                  className={
                    'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white mb-2' +
                    (errors.nameError ? 'border-red-500' : 'border-gray-200')
                  }
                  id="name"
                  type="text"
                  placeholder="Майка"
                  ref={this.textInput}
                />
                {errors.nameError ? (
                  <p className="text-red-500 text-xs italic mb-2">{errors.nameError}</p>
                ) : (
                  <></>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="description"
                >
                  Описание
                </label>
                <input
                  className={
                    'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white mb-2' +
                    (errors.descriptionError ? 'border-red-500' : 'border-gray-200')
                  }
                  id="description"
                  type="text"
                  placeholder="Черная майка из хлопка"
                  ref={this.descriptionInput}
                />
                {errors.descriptionError ? (
                  <p className="text-red-500 text-xs italic mb-2">{errors.descriptionError}</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="-mx-3 mb-6">
              <div className="px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="date"
                >
                  Дата добавления
                </label>
                <input
                  className={
                    'appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white mb-2' +
                    (errors.dateError ? 'border-red-500' : 'border-gray-200')
                  }
                  id="date"
                  type="date"
                  ref={this.dateInput}
                />
                {errors.dateError ? (
                  <p className="text-red-500 text-xs italic mb-2">{errors.dateError}</p>
                ) : (
                  <></>
                )}
              </div>
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
                  <input type="radio" id="yes" name="stock" value="yes" className="m-2" />
                  <label htmlFor="yes">Да</label>
                </div>
                <div>
                  <input type="radio" id="no" name="stock" value="no" className="m-2" />
                  <label htmlFor="no">Нет</label>
                </div>
                {errors.dateError ? (
                  <p className="text-red-500 text-xs italic mb-2">{errors.dateError}</p>
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
                  <input type="checkbox" id="delivery" name="delivery" className="m-2" />
                  <label htmlFor="delivery">Быстрая доставка</label>
                </div>
                <div>
                  <input type="checkbox" id="original" name="original" className="m-2" />
                  <label htmlFor="original">Оригинальная вещь</label>
                </div>
                <div>
                  <input type="checkbox" id="luxury" name="luxury" className="m-2" />
                  <label htmlFor="luxury">Люксовый бренд</label>
                </div>
                <div>
                  <input type="checkbox" id="quality" name="quality" className="m-2" />
                  <label htmlFor="quality">Гарантия качества</label>
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

                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
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
}

export default Form;
