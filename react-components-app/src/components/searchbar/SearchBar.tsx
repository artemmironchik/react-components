import { Component } from 'react';
import searchIcon from '../../images/search.svg';

type SearchBarProps = {
  handleSearchValue: (value: string) => void;
  value: string;
};

class SearchBar extends Component<SearchBarProps, never> {
  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { handleSearchValue } = this.props;
    handleSearchValue(e.target.value);
  };

  render() {
    const { value } = this.props;
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
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

export default SearchBar;
