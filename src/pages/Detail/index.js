import React,{useContext} from 'react'
import StaticContext from '../../contexts/StaticContext'

export default function Detail({params}) {
    const context = useContext(StaticContext);
    return (
        <div>
            <h1>Gif con id {params.id}</h1>
        </div>
    )
}
