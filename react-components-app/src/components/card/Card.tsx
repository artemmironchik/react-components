import ICard from '../../types/item';

function Card({ name, status, species, type, gender, image, url }: ICard) {
  return (
    <div className="grid w-[1fr] h-min">
      <img className="w-full h-[40vh]" src={image} alt={name} />
      <div>{name}</div>
      <div className="text-xs text-[#b3b1b1]">{status}</div>
      <div className="grid grid-rows-3 grid-cols-1">
        <div>
          Вид<span className="text-xs text-[#b3b1b1] ml-1">{species}</span>
        </div>
        <div>
          Тип<span className="text-xs text-[#b3b1b1] ml-1">{type}</span>
        </div>
        <div>
          Гендер<span className="text-xs text-[#b3b1b1] ml-1">{gender}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
