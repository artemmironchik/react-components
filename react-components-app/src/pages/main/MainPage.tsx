import { useState } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import CardList from '../../components/cards/CardList';
import Modal from '../../components/modal/Modal';
import CardSkeletonList from '../../components/cardSkeleton/CardSkeletonList';
import { useAppSelector } from '../../hooks/hooks';
import { useGetCardsQuery } from '../../api/charactersApi';

export default function MainPage() {
  const { searchValue } = useAppSelector((state) => state.searchReducer);
  const { data: cards, error, isFetching } = useGetCardsQuery(searchValue);
  const [currentValue, setCurrentValue] = useState<string>(searchValue);
  const [currentCardId, setCurrentCardId] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCurrentCardId(Number(e.currentTarget.id));
    setIsModalOpen(true);
  };

  return (
    <div className="mt-6 w-full">
      <SearchBar setCurrentValue={setCurrentValue} value={currentValue} />
      {isFetching && (
        <div className="grid grid-rows-auto grid-cols-5 gap-2.5 mt-4">
          <CardSkeletonList cardsLength={10} />
        </div>
      )}
      {error ? <div>По вашему запросу ничего не найдено</div> : ''}
      {cards && !error && <CardList cardsToDisplay={cards} handleCardClick={handleCardClick} />}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} currentCardId={currentCardId} />}
    </div>
  );
}
