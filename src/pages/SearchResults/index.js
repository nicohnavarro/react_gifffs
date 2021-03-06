import React from 'react'
import {Link} from 'wouter'
import ListGifs from '../../components/ListOfGifs'

export default function SearchResults({params}) {
    return (
        <>
        <ListGifs params={params} /> 
        </>
    )
}
