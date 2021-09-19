import React from "react";
import {
  render,
} from "@testing-library/react";
import App from "../App";


test(" should render  render All Components", async () => {
 const {findByTestId} = render(<App/>)
  const buttonLoad =  await findByTestId('loade-more')
  expect(buttonLoad).toBeInTheDocument()
});

