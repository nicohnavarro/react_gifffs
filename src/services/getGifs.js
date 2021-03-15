import {API_KEY, API_URL} from './settings'


export async function getGifs({ keyword = "morty" } = {}) {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return await fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((gif) => {
          const { id, title, images } = gif;
          const { url } = images.downsized_medium;
          return { id, title, url };
        });
        return gifs;
      }
    });
}
