import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

export default function Results() {

    const {darkMode, setDarkMode, category, setCategory, trueCount, setTrueCount} = useContext(DataContext)

    return(
        <>
        <div className="main-left" style={darkMode ? {color: '#fff'} : {}}>
            <h3>Quiz tamamlandı</h3>
            <h6>Skorunuz...</h6>
        </div>

        <div className="main-results">

            <div style={darkMode ? {backgroundColor: '#3B4D66'} : {}}>

                <div>
                    <img src={`./img/${category === 'HTML' && 'html-icon.png' || category === 'CSS' && 'css-icon.png' || category === 'Javascript' && 'js-icon.png' || category === 'React JS' && 'react-icon.png' }`} alt="" />
                    <h3 style={darkMode ? {color: '#fff'} : {}}>{category}</h3>
                </div>

                <h1 style={darkMode ? {color: '#fff'} : {}}>{trueCount}</h1>
                <p style={darkMode ? {color: '#ABC1E1'} : {}}>10 soruda</p>

            </div>
            
            <Link to={'/'}>Tekrar Oyna</Link>

        </div>
        </>
    )
}