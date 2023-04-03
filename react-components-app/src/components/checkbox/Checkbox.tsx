import { FormItemProps } from '../../pages/form/Form';
import { FieldValues } from 'react-hook-form';

interface CheckboxProps<T extends FieldValues> {
  form: FormItemProps<T>;
  values: string[];
  values_id: string[];
  title: string;
}

export default function Checkbox<T extends FieldValues>({
  form,
  values,
  values_id,
  title,
}: CheckboxProps<T>) {
  const { name, errors, register } = form;

  return (
    <div className="px-3">
      <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{title}</p>
      {values.map((value, index) => (
        <div key={index}>
          <input
            {...register(name, {
              required: 'Поле должно быть заполнено',
            })}
            type="checkbox"
            id={values_id[index]}
            name={values_id[index]}
            value={value}
            className="m-2"
          />
          <label htmlFor={values_id[index]}>{value}</label>
        </div>
      ))}
      <p className="text-red-500 text-xs italic mb-2">{String(errors[name]?.message)}</p>
    </div>
  );
}
