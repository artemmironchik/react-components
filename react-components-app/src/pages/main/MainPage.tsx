import { useEffect, useState } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import { IFullCard } from '../../types/item';
import CardList from '../../components/cards/CardList';
import { getCharacters, getCharacterById } from '../../api/charactersApi';
import Modal from '../../components/modal/Modal';

export default function MainPage() {
  const [currentValue, setCurrentValue] = useState<string>(
    localStorage.getItem('inputValue') || ''
  );
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('inputValue') || '');
  const [cards, setCards] = useState<IFullCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentCard, setCurrentCard] = useState<IFullCard>(cards[0]);

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', searchValue);
    };
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getCharacters(searchValue)
        .then((data) => {
          setCards(data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setCards([]);
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [searchValue]);

  const handleSearchValue = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    getCharacterById(e.currentTarget.id)
      .then((data) => {
        setCurrentCard(data);
      })
      .then(() => setIsModalOpen(true));
  };

  return (
    <div className="mt-6 w-full">
      <SearchBar
        setCurrentValue={setCurrentValue}
        handleSearchValue={handleSearchValue}
        value={currentValue}
      />
      {isLoading && <div>Loading...</div>}
      {cards && !isLoading && (
        <CardList cardsToDisplay={cards} errorValue={error} handleCardClick={handleCardClick} />
      )}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} {...currentCard} />}
    </div>
  );
}
