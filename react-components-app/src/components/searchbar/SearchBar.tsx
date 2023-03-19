import { Component } from 'react';
import searchIcon from '../../images/search.svg';

type SearchBarProps = {
  value: string;
  setValue: (value: string) => void;
};

class SearchBar extends Component<SearchBarProps, never> {
  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { setValue } = this.props;
    setValue(e.target.value);
  };

  render() {
    return (
      <div className="flex w-full relative border border-solid border-black">
        <img
          src={searchIcon}
          alt="Search icon"
          className="absolute top-1/2 left-2 max-w-[16px] translate-y-[-50%]"
        />
        <input placeholder="Поиск" value="" className="w-full pl-8" onChange={this.handleSearch} />
      </div>
    );
  }
}

export default SearchBar;
