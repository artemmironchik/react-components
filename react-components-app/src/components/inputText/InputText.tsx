import { FormItemProps } from '../../pages/form/Form';
import { FieldValues } from 'react-hook-form';

interface InputTextProps<T extends FieldValues> {
  form: FormItemProps<T>;
  label: string;
  placeholder: string;
}

export default function InputText<T extends FieldValues>({
  form,
  label,
  placeholder,
}: InputTextProps<T>) {
  const { name, errors, register } = form;

  return (
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...register(name, {
          required: 'Поле должно быть заполнено',
          minLength: {
            value: 3,
            message: 'Поле должно содержать как минимум 3 символа',
          },
        })}
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        className={
          'appearance-none block w-1/2 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white mb-2' +
          (errors[name]?.message ? 'border-red-500' : 'border-gray-200')
        }
      />
      {Boolean(errors[name]?.message) ? (
        <p className="text-red-500 text-xs italic mb-2">{String(errors[name]?.message)}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
