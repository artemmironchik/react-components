import { IFormItem } from '../../types/item';

function FormCard({ name, description, color, status, addInfo, imageURL }: IFormItem) {
  return (
    <div className="grid w-[1fr] h-min border">
      <img className="w-full h-[40vh]" src={imageURL} alt={name} />
      <div>{name}</div>
      <div className="text-xs text-[#b3b1b1]">{description}</div>
      <div className="grid grid-cols-1">
        <div className="inline-block">
          Цвет<span className="text-xs text-[#b3b1b1] ml-1">{color}</span>
        </div>
        <div>
          В наличии<span className="text-xs text-[#b3b1b1] ml-1">{status}</span>
        </div>
        <div>
          Доп. информация<span className="text-xs text-[#b3b1b1] ml-1">{addInfo.join(', ')}</span>
        </div>
      </div>
    </div>
  );
}

export default FormCard;
