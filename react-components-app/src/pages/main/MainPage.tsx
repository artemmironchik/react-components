import { useEffect, useState } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import IItem from '../../types/item';
import CardList from '../../components/cards/CardList';
import { BASE_URL } from '../../utils/constValues';

export default function MainPage() {
  const [currentValue, setCurrentValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [cards, setCards] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', searchValue);
    };
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(`${BASE_URL}/character/?name=${searchValue}`)
        .then((res) => {
          if (!res.ok) {
            throw Error('По вашему запросу ничего не найдено');
          }
          return res.json();
        })
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

  return (
    <div className="mt-6 w-full">
      <SearchBar
        setCurrentValue={setCurrentValue}
        handleSearchValue={handleSearchValue}
        value={currentValue}
      />
      {isLoading && <div>Loading...</div>}
      {cards && !isLoading && <CardList cardsToDisplay={cards} errorValue={error} />}
    </div>
  );
}
