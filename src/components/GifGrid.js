import React from 'react';
import { useFechtGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFechtGifs(category );
   
    return (
        <>
            <h3>
                {category}
            </h3>
            {loading && <svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg>}
            <div className='grid'>
                {
                    images.map( img  =>(
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    );
};
