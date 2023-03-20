/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import Card from '../card/Card';

import IItem from '../../types/item';

type CardsProps = {
  cardsToDisplay: IItem[];
};

const Cards: FC<CardsProps> = ({ cardsToDisplay }) => {
  return (
    <>
      {!!cardsToDisplay.length && (
        <div className="grid grid-rows-auto grid-cols-5 gap-2.5 mt-4">
          {cardsToDisplay.map((card: IItem) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      )}

      {!cardsToDisplay.length && <div>По вашему запросу ничего не найдено</div>}
    </>
  );
};
export default Cards;
