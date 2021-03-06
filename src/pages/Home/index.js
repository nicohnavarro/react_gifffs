import React from 'react'
import {Link} from 'wouter'

const POPULAR_GIFS = ['Argentina','Colombia','Chile','Peru']

export default function Home() {
    return (
        <>
            <h3 className='App_title'>Tu buscador de Gifs</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif)=>(
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

