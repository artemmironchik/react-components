import { FormItemProps } from '../../pages/form/Form';
import { FieldValues } from 'react-hook-form';

interface RadioProps<T extends FieldValues> {
  form: FormItemProps<T>;
  labels: string[];
  labels_id: string[];
  title: string;
}

export default function Radio<T extends FieldValues>({
  form,
  labels,
  labels_id,
  title,
}: RadioProps<T>) {
  const { name, errors, register } = form;

  return (
    <div className="px-3">
      <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{title}</p>
      {labels.map((value, index) => (
        <div key={index}>
          <input
            {...register(name, {
              required: 'Поле должно быть заполнено',
            })}
            type="radio"
            id={labels_id[index]}
            value={value}
            className="m-2"
          />
          <label htmlFor={labels_id[index]}>{value}</label>
        </div>
      ))}
      <p className="text-red-500 text-xs italic mb-2">{String(errors[name]?.message)}</p>
    </div>
  );
}
