import { FC } from 'react';
import Card from '../card/Card';
import { IFullCard } from '../../types/item';

export interface CardsProps {
  cardsToDisplay?: IFullCard[];
  handleCardClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const CardList: FC<CardsProps> = ({ cardsToDisplay, handleCardClick }) => {
  return (
    <>
      {!!cardsToDisplay && (
        <div className="grid grid-rows-auto grid-cols-5 gap-2.5 mt-4">
          {cardsToDisplay.map((card: IFullCard) => (
            <Card key={card.id} {...card} handleCardClick={handleCardClick} />
          ))}
        </div>
      )}
    </>
  );
};
export default CardList;
