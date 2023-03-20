/* eslint-disable react/state-in-constructor */
import { Component } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import IItem from '../../types/item';
import generateCards from '../../utils/generate';
import Cards from '../../components/cards/Cards';

type MainPageState = {
  value: string;
  cards: IItem[];
};

class MainPage extends Component {
  state: MainPageState = {
    value: localStorage.getItem('inputValue') || '',
    cards: generateCards(100),
  };

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('inputValue', value);
  }

  handleSearchValue = (searchValue: string) => {
    this.setState({ value: searchValue });
  };

  render() {
    const { value, cards } = this.state;
    const filtered = cards.filter(
      (p) =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        p.description.toLowerCase().includes(value.toLowerCase())
    );
    return (
      <div className="mt-6">
        <SearchBar handleSearchValue={this.handleSearchValue} value={value} />
        <Cards cardsToDisplay={filtered} />
      </div>
    );
  }
}

export default MainPage;
