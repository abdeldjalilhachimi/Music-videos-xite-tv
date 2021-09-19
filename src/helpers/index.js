export function trancate(string, n) {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  }


export function getGenresNames(genres, value) {
    return genres.find((genre)=>(genre.id === value)).name
}
  
  