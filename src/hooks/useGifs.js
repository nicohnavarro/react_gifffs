import {useContext, useEffect, useState} from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0;

export function useGifs ({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNext, setLoadingNext] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)
  const [page, setPage] = useState(INITIAL_PAGE)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)

    getGifs({ keyword: keywordToUse, rating })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, rating, setGifs])

  useEffect(function () {
    if(page === INITIAL_PAGE) return
    setLoadingNext(true)
    getGifs({keyword: keywordToUse, page})
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNext(false)
      })
  },[keywordToUse,page,setGifs])

  return {loading,loadingNext, gifs, setPage}
}