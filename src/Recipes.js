import React, { useState } from 'react'
import style from './recipe.module.css'
import Nutinfo from './Nutinfo';

const Recipe = ({title, calories, image}) => {

    const [pushed, setpushed] = useState(0);

    const pushButton = () =>{
        if (!pushed) setpushed(1);
        else setpushed(0);
    }

    return (
    // <div id='div1'>
    <>
        <div className={style.reci}>
            <h1>
                {title}
            </h1>
            <p>
                Calories: {calories}
            </p>
            <img src={image} alt='' className={style.image}/>
            <button onClick={pushButton}>View</button>
        </div>
        <Nutinfo title={title} pushed={pushed}/>
    </>
    // </div>
    )
}

export default Recipe;