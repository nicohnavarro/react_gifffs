const apiKey = "9Cly9JMYYx3gERF0T3ocHn4e1uiebnuk";

export async function getGifs({ keyword = "morty" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
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
