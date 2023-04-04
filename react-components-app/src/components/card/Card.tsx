import IItem from '../../types/item';

function Card({ name, description, color, price, rating, imageURL }: IItem) {
  return (
    <div className="grid w-[1fr] h-min">
      <img className="w-full h-[40vh]" src={imageURL} alt={name} />
      <div>{name}</div>
      <div className="text-xs text-[#b3b1b1]">{description}</div>
      <div className="grid grid-rows-3 grid-cols-1">
        <div>
          Цвет<span className="text-xs text-[#b3b1b1] ml-1">{color}</span>
        </div>
        <div>
          Стоимость<span className="text-xs text-[#b3b1b1] ml-1">{price}</span>
        </div>
        <div>
          Рейтинг<span className="text-xs text-[#b3b1b1] ml-1">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
