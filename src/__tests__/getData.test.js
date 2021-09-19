
import getData from "../services/getData";
import dataStored from '../../data.json'
const mockResponseValue  = {
    data : {
           videos: [
               {
                 id: 503026,
                 artist: "John Mayer",
                 title: "Something Like Olivia",
                 release_year: 2013,
                 genre_id: 5,
                 image_url:
                   "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503026/images/app/w522_h292.jpg",
               },
               {
                 id: 501895,
                 artist: "Tom Petty and the Heartbreakers",
                 title: "I Should Have Known It",
                 release_year: 2010,
                 genre_id: 8,
                 image_url:
                   "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501895/images/app/w522_h292.jpg",
               },
             ],
             genres: [
               {
                 id: 17,
                 name: "Jazz",
               },
               {
                 id: 8,
                 name: "Rock",
               },
             ],
        
    }
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(dataStored),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("Fetch data without Errors: ", async () => {
  const data = (await getData()).data
  expect(data).toEqual(dataStored);
});
