import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';


// Note : 
//useState() is a function that will always return an array.
//The first item is the value of your state, and the second item is a setter, which allows you to set the state to something else. 


function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
        <section>
            <h1 data-testedid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList />
        </section>
    );
};
export default Gallery;