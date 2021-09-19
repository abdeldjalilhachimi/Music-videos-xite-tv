import React from "react";
import {
  render,
  fireEvent
  
} from "@testing-library/react";
import SearchBar from '../components/searchbar/SearchBar'

test(" should render  SearchBar components and watch for changing the input value ", async () => {
  const setSearchValue = ()=> {}
  const {findByTestId} = render(<SearchBar setSearchValue={setSearchValue}/>)
  const heading = await findByTestId('main-heading')
  const input = await findByTestId('search-input')
  expect(input.value).toBe('') 
  fireEvent.change(input, {target: {value: 'user typing some words'}})
  expect(input.value).toBe('user typing some words')
  expect(heading).toBeInTheDocument()
 
});

