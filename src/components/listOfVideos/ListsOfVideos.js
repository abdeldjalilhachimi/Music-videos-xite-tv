import React, { useState, useEffect } from "react";
import VideoCard from "../video-card/VideoCard";
import getData from "../../services/getData";
import Loader from "../loading/Loader";

const ListsOfVideos = ({
  searchkeyword,
  loadingNumber,
  selectedGenres,
  setcheckVideos,
  selectYear,
}) => {
  const [videos, setVideos] = useState([]);
  const [isloading, setIsloading] = useState(false);
  useEffect(
    function () {
      setIsloading(true);
      getData()
        .then((response) => {
          const { videos: reterivedVideos } = response.data;
          setVideos(reterivedVideos.slice(0, loadingNumber));
          setIsloading(false); 
          if (videos?.length > 0 || reterivedVideos?.length > 0) {
            setcheckVideos(true);
          }

          if (selectYear) {
            const filteredVideosByYear = reterivedVideos.filter((video) => {
              return video.release_year === selectYear;
            });
            setVideos(filteredVideosByYear.slice(0, loadingNumber));
            setcheckVideos(filteredVideosByYear?.length > 0);
          }
          if (selectedGenres?.length > 0) {
            const filteredVideosByGernre = reterivedVideos.filter((video) => {
              return selectedGenres.includes(video.genre_id);
            });
            setVideos(filteredVideosByGernre.slice(0, loadingNumber));
            setcheckVideos(filteredVideosByGernre?.length > 0);
          }
          if (searchkeyword) {
            const filteredBySearchKeyword = videos
              .slice(0, loadingNumber)
              .filter((video) => {
                return (
                  video.artist
                    .toLowerCase()
                    .includes(searchkeyword.toLowerCase()) ||
                  video.title
                    .toString()
                    .toLowerCase()
                    .includes(searchkeyword.toLowerCase())
                );
              });
            setVideos(filteredBySearchKeyword);
            setcheckVideos(filteredBySearchKeyword.length > 0);
          }
        })
        .catch((err) => {
           console.log(`Error Fetching Data  ${err}`);
        });
    },
    [searchkeyword, loadingNumber, selectedGenres, selectYear]
  );
  return isloading ? (
    <Loader />
  ) : (
    videos.map((video, index) => {
      return (
        <div  data-testid={`list-of-video-${index}`} key={index}>
          <VideoCard
            key={index}
            title={video.title}
            url={video.image_url}
            id={video.id}
            artist={video.artist}
          />
        </div>
      );
    })
  );
};

export default ListsOfVideos;
