import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFechtGifs = ( category ) =>{

    const initialState = ({
        data: [],
        loading: true
    });

    const [state, setState] = useState(initialState);


    useEffect( ()=>{
        
        getGifs( category )
            .then( imgs=>{
                
                setState({
                    data: imgs,
                    loading: false
                })
                
            } )

    }, [category]);


    
    return state;

}