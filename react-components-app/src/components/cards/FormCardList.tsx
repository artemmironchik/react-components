/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import FormCard from '../card/FormCard';

import { IFormItem } from '../../types/item';

export interface FormCardsProps {
  cardsToDisplay: IFormItem[];
}

const FormCardList: FC<FormCardsProps> = ({ cardsToDisplay }) => {
  return (
    <div>
      <h3 className="text-center font-bold">Карточки</h3>
      <h4 className="text-center font-bold">Количество карточек: {cardsToDisplay.length}</h4>
      {!!cardsToDisplay.length && (
        <div className="grid grid-rows-auto grid-cols-4 gap-2.5 mt-4">
          {cardsToDisplay.map((card: IFormItem) => (
            <FormCard key={card.id} {...card} />
          ))}
        </div>
      )}

      {!cardsToDisplay.length && (
        <div className="text-center">Заполните форму, чтобы создать свою первую карточку</div>
      )}
    </div>
  );
};
export default FormCardList;
