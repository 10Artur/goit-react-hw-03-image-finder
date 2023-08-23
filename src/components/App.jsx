import { Button } from './Button/Button';
import { Container, GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { pixabayAPI } from './API/API';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    items: [],
    page: 1,
    perPage: 12,
    totalHits: 0,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, perPage } = this.state;
    try {
      if (prevState.query !== query || prevState.page !== page) {
        this.setState({ isLoading: true });
        const resp = await pixabayAPI(query, page, perPage);
        if (resp.status !== 200) {
          throw new Error();
        }
        this.setState(prevState => ({
          items: [...prevState.items, ...resp.data.hits],
          totalHits: resp.data.totalHits,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  handleSearch = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value.trim();
    this.setState({ query, items: [], page: 1 });
    evt.target.reset();
  };

  handleLoadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { items, perPage, totalHits, page, isLoading } = this.state;
    const totalPage = Math.round(totalHits / perPage);

    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch} />
        {isLoading && <Loader />}
        <ImageGallery images={this.state.items} />
        {items.length > 0 && page <= totalPage && (
          <Button click={this.handleLoadMoreBtn} />
        )}

        <GlobalStyle />
      </Container>
    );
  }
}
