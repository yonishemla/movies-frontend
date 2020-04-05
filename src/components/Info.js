import React from 'react';
import {Link} from 'react-router-dom';


import './Info.css'

export default function Info(props) {
    return (
        <div className="innerDiv">
            <h1>{props.title}</h1> 
            <img src={props.image} /> 
            <h1>Released at: {props.releaseYear}</h1> 
            <h1>Rating: {props.rating}/10</h1>
            <h1>Genre: {props.genre}</h1>
            <Link to='/'>
            <button>back</button>
            </Link>
        </div>
    )
}
