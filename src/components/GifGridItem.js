import React from 'react';

export const GifGridItem = ({id, title, src}) => {

    

    return (
        <>
           
            <div className='grid__box animate__animated animate__fadeIn' key={id}>
                <div className='grid__box__content'>

                    <div className='grid__box__image'>
                        <p>
                            <img src={src} alt={title}></img>
                        </p>
                    </div>
                    <div className='grid__box__title'>
                        <p>
                            {title}
                        </p>
                    </div>
                </div>
            </div>


           

        </>
    )
};
