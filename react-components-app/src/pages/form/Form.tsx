/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { Component } from 'react';
import IItem from '../../types/item';

import { COLORS } from '../../utils/constValues';

interface FormProps {}
interface FormState {
  items: IItem[];
}

class Form extends Component<FormProps, FormState> {
  textInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  descriptionInput: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.descriptionInput = React.createRef();
    this.state = {
      items: [],
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    alert('A name was submitted: ' + this.textInput.current?.value);
    e.preventDefault();
  }

  render() {
    return (
      <div className="flex justify-center w-full">
        <form
          className="w-full max-w-lg bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4 mt-4"
          onSubmit={this.handleSubmit}
        >
          <h2 className="text-center font-bold">Form</h2>
          <div className="-mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Название
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Майка"
                ref={this.textInput}
              />
              <p className="text-red-500 text-xs italic mb-2">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Описание
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Черная майка из хлопка"
                ref={this.descriptionInput}
              />
            </div>
          </div>
          <div className="-mx-3 mb-6">
            <div className="px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Дата добавления
              </label>
              <input
                className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="date"
                ref={this.dateInput}
              />
            </div>
          </div>
          <div className="-mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Цвет
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
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
            </div>
          </div>
          <div className="-mx-3 mb-6 mt-6">
            <div className="px-3">
              <p className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Есть на складе
              </p>
              <div>
                <input type="radio" id="yes" name="stock" value="yes" checked className="m-2" />
                <label htmlFor="yes">Да</label>
              </div>
              <div>
                <input type="radio" id="no" name="stock" value="no" className="m-2" />
                <label htmlFor="no">Нет</label>
              </div>
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
            </div>
          </div>
          <div className="-mx-3 mb-10 mt-6">
            <label htmlFor="avatar" className="block mb-2">
              Choose a profile picture:
            </label>

            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
          </div>
          <div className="flex justify-center mb-4">
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Отправить форму
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
