
import React from 'react'
import Select from 'react-select'
import {render} from '@testing-library/react'
import selectEvent from 'react-select-event'

test('should select videos by gerners ', async () => {
  const options = [
    { value: 'country', label: 'Country' },
    { value: 'rock', label: 'Rock' },
    { value: 'pop', label: 'Pop' },
  ];
  const {getByTestId, getByLabelText} = render(
    <form data-testid="form">
      <label htmlFor="genres">GENRES</label>
      <Select options={options} name="genres" inputId="genres" isMulti />
    </form>
  )
  expect(getByTestId('form')).toHaveFormValues({genres: ''}) // empty select
  
  // select two values...
  await selectEvent.select(getByLabelText('GENRES'), ['Rock', 'Pop'])
  expect(getByTestId('form')).toHaveFormValues({genres: ['rock', 'pop']})
  
  // ...and add a third one
  await selectEvent.select(getByLabelText('GENRES'), 'Country')
  expect(getByTestId('form')).toHaveFormValues({
    genres: ['rock', 'pop','country' ],
  })
});