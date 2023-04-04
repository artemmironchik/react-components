import { useEffect, useState, useMemo } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import IItem from '../../types/item';
import CardList from '../../components/cards/CardList';
import { BASE_URL } from '../../utils/constValues';

export default function MainPage() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [cards, setCards] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', searchValue);
    };
  });

  useEffect(() => {
    fetch(`${BASE_URL}/character/`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Извините, получить данные не получилось');
        }
        return res.json();
      })
      .then((data) => {
        setCards(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // const filteredCards = useMemo(
  //   () =>
  //     cards.filter(
  //       (p) =>
  //         p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
  //         p.description.toLowerCase().includes(searchValue.toLowerCase())
  //     ),
  //   [cards, searchValue]
  // );

  const handleSearchValue = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  return (
    <div className="mt-6 w-full">
      <SearchBar handleSearchValue={handleSearchValue} value={searchValue} />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {cards && <CardList cardsToDisplay={cards} />}
    </div>
  );
}
