import { FormItemProps } from '../../pages/form/Form';
import { FieldValues } from 'react-hook-form';
import { COLORS } from '../../utils/constValues';

interface InputTextProps<T extends FieldValues> {
  form: FormItemProps<T>;
  label: string;
}

export default function Select<T extends FieldValues>({ form, label }: InputTextProps<T>) {
  const { name, errors, register } = form;

  return (
    <div className="md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative">
        <select
          {...register(name, {
            required: 'Поле должно быть заполнено',
          })}
          id={name}
          className={
            'appearance-none block w-1/2 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white mb-2' +
            (errors[name]?.message ? 'border-red-500' : 'border-gray-200')
          }
        >
          {COLORS.map((color, index) =>
            index === 0 ? (
              <option value="" key={index}>
                {color}
              </option>
            ) : (
              <option value={color} key={index}>
                {color}
              </option>
            )
          )}
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
      <p className="text-red-500 text-xs italic mb-2">{String(errors[name]?.message)}</p>
    </div>
  );
}
