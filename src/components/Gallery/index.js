import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

// Note : 
//useState() is a function that will always return an array.
//The first item is the value of your state, and the second item is a setter, which allows you to set the state to something else. 


function Gallery() {
    const currentCategory = {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects"
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img
                    src={photo}
                    alt="Commercial Example"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
};
export default Gallery;