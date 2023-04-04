import { FC } from 'react';
import Card from '../card/Card';

import ICard from '../../types/item';

export interface CardsProps {
  cardsToDisplay: ICard[];
  errorValue: string;
}

const CardList: FC<CardsProps> = ({ cardsToDisplay, errorValue }) => {
  return (
    <>
      {!!cardsToDisplay.length && (
        <div className="grid grid-rows-auto grid-cols-5 gap-2.5 mt-4">
          {cardsToDisplay.map((card: ICard) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      )}

      {!cardsToDisplay.length && <div>{errorValue}</div>}
    </>
  );
};
export default CardList;
