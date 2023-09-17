import React, { useEffect, useState } from 'react';
import Floater from './Floater.js'
import style from "./float.module.css"

const Nutinfo = ({title, pushed}) => {
    const APP_ID = '1376b1d8';
    const APP_KEY = '0fb4f2d95b6eceef38a43aa5c7d4ef91';
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=logging&ingr=${title}`
    
    const [info, setInfo] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    
    const getInfo = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setInfo(data)
    }


    useEffect(() =>{
        getInfo();
    }, [pushed])


    useEffect(() =>{
        window.addEventListener('scroll', handleScroll, {passive: true})

        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const scrollbehavior = {
        top: 75 + scrollPosition
    };

    return (
        <div className={style.floatMenu} id='div1' style={scrollbehavior}>
            {pushed === 1 && (
                <Floater info = {info}/>
            )}
        </div>
    );
}

export default Nutinfo 