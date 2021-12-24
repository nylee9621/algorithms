const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
  const hash = [];
  const hasGenres = [];
  const album = [];

  for(let i in genres) {
    if(hasGenres.includes(genres[i])) {
      for(let j in hash) {
        if(hash[j].genres === genres[i]) {
          hash[j] = {
            ...hash[j],
            plays: hash[j].plays + plays[i],
            songs: [...hash[j].songs, {id: i, plays: plays[i]}]
          }
          break;
        }
      }
    } else {
      hash.push({
        genres: genres[i], 
        plays: plays[i], 
        songs: [{id: i, plays: plays[i]}]
      });
      hasGenres.push(genres[i]);
    }
  }

  hash.sort((a, b) => {
    if(a.plays > b.plays) return -1;
  })

  hash.map(x => {
    x.songs.sort((a, b) => {
      if(a.plays > b.plays) return -1;
    })
  })

  hash.map(x => {
    album.push(Number(x.songs[0].id));
    if(x.songs.length > 1) album.push(Number(x.songs[1].id));
  })

  return album;
}

solution(genres, plays);