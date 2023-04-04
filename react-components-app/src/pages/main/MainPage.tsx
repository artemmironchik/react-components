import { useEffect, useState, useMemo } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import IItem from '../../types/item';
import generateCards from '../../utils/generate';
import CardList from '../../components/cards/CardList';

export default function MainPage() {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('inputValue') || '');
  const [cards] = useState<IItem[]>(generateCards(100));

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', searchValue);
    };
  });

  const filteredCards = useMemo(
    () =>
      cards.filter(
        (p) =>
          p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          p.description.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [cards, searchValue]
  );

  const handleSearchValue = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  return (
    <div className="mt-6 w-full">
      <SearchBar handleSearchValue={handleSearchValue} value={searchValue} />
      <CardList cardsToDisplay={filteredCards} />
    </div>
  );
}
