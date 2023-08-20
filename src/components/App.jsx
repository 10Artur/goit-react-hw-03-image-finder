import { Button } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      console.log(`${this.state.query}, ${this.state.page}`);
    }
  }

  handleSearch = e => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === '') {
      alert("You didn't write anything!");
      return;
    }
    this.changeQuery(e.target.elements.query.value);

    e.target.reset();
  };

  handleLoadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={this.state.images} />
        <Button />

        <GlobalStyle />
      </div>
    );
  }
}
