import { BiSearch } from 'react-icons/bi';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <BiSearch />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="query"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
