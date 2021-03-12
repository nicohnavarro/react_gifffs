import { useEffect, useState } from "react";
import { getGifs } from "../services/getGifs";

export function useGifs({ keyword }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    setLoading(true);
    
    const keywordToUse = keyword  || localStorage.getItem('lastKeyword');

    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword',keyword);
    });
  },[keyword]);

return {loading,gifs};
}