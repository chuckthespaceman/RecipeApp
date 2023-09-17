import style from "./float.module.css"

const Floater = ({info}) =>{
    
    return (
    <div className={style.details}>
        <h2>Total Nutrients</h2>
        <ul>
            {Object.keys(info.totalNutrients).map(nutrientKey => {
                const nutrient = info.totalNutrients[nutrientKey];
                return (
                    <li key={nutrientKey}>
                        {nutrient.label}: {nutrient.quantity} {nutrient.unit}
                    </li>
                    );
                })}
        </ul>
    </div>
    )
}


export default Floater