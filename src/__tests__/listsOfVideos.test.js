import React from "react";
import {
  render,
} from "@testing-library/react";
import ListsOfVideos from "../components/listOfVideos/ListsOfVideos";

test(" should render lists of videos", async () => {
  const setcheckVideos = () => {}
 const {findByTestId} = render(<ListsOfVideos setcheckVideos={setcheckVideos}/>)
  const elemDiv = await findByTestId('list-of-video-2')
  expect(elemDiv).toBeInTheDocument()

});

