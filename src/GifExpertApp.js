import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const initialState = ['One Piece'];
    const [categories, setCategories] = useState(initialState);

    // const handleAdd = () =>{
    //     // setCategories([...categories, 'One Piece']);
    //     setCategories(cats => [...cats, 'One Piece']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />

            { 
                categories.map( category =>(
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            
            }
            

        </>
    )
};
