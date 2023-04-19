import { FC } from 'react';
import { IFullCard } from '../../types/item';

interface CardProps extends IFullCard {
  handleCardClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Card: FC<CardProps> = ({ name, status, species, gender, image, id, handleCardClick }) => {
  return (
    <div
      className="grid w-[1fr] h-min border border-black border-2"
      id={String(id)}
      onClick={(e) => handleCardClick(e)}
    >
      <img className="w-full h-[40vh]" src={image} alt={name} />
      <div className="border-black border-t-2 px-2">{name}</div>
      <div className="text-xs text-[#b3b1b1] px-2">{status}</div>
      <div className="grid grid-rows-3 grid-cols-1 px-2">
        <div>
          Вид<span className="text-xs text-[#b3b1b1] ml-1">{species}</span>
        </div>
        <div>
          Гендер<span className="text-xs text-[#b3b1b1] ml-1">{gender}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
