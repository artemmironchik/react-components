import { FC, useCallback } from 'react';
import searchIcon from '../../images/search.svg';

type SearchBarProps = {
  handleSearchValue: (value: string) => void;
  value: string;
};

const SearchBar: FC<SearchBarProps> = ({ handleSearchValue, value }) => {
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => handleSearchValue(e.target.value),
    [handleSearchValue]
  );

  return (
    <div className="flex w-full relative border border-solid border-black">
      <img
        src={searchIcon}
        alt="Search icon"
        className="absolute top-1/2 left-2 max-w-[16px] translate-y-[-50%]"
      />
      <input
        name="Search"
        placeholder="Поиск"
        value={value}
        className="w-full pl-8"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
