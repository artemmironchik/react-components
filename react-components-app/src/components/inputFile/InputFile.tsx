import { FormItemProps } from '../../pages/form/Form';
import { FieldValues } from 'react-hook-form';

interface InputFileProps<T extends FieldValues> {
  form: FormItemProps<T>;
  label: string;
}

export default function InputFile<T extends FieldValues>({ form, label }: InputFileProps<T>) {
  const { name, errors, register } = form;

  return (
    <div className="px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...register(name, {
          required: 'Поле должно быть заполнено',
        })}
        type="file"
        name={name}
        id={name}
        accept="image/*"
      />
      <p className="text-red-500 text-xs italic mb-2">{String(errors[name]?.message)}</p>
    </div>
  );
}
