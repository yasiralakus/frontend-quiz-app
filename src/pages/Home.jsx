import { useContext, useEffect } from "react"
import { DataContext } from "../App"
import { Link } from "react-router-dom";

export default function Home() {

    const {darkMode, setDarkMode, category, setCategory, trueCount, setTrueCount} = useContext(DataContext);

    useEffect(() => {
        setCategory(null);
        setTrueCount(0);
    }, [])

    return (
        <>
            <div className="main-left" style={darkMode ? {color: '#fff'}: {}}>
                <h3>Frontend Quiz'e</h3>
                <h1>Hoşgeldiniz!</h1>
                <p>Başlamak için bir konu seçin.</p>
            </div>

            <div className="main-right">

                <Link to={'/html-questions'} style={darkMode ? {backgroundColor: '#3B4D66', color: '#fff'} : {}}>
                    <img src="./img/html-icon.png" alt="" />
                    <h3>HTML</h3>
                </Link>

                <Link to={'/css-questions'} style={darkMode ? {backgroundColor: '#3B4D66', color: '#fff'} : {}}>
                    <img src="./img/css-icon.png" alt="" />
                    <h3>CSS</h3>
                </Link>

                <Link to={'/javascript-questions'} style={darkMode ? {backgroundColor: '#3B4D66', color: '#fff'} : {}}>
                    <img src="./img/js-icon.png" alt="" />
                    <h3>Javascript</h3>
                </Link>

                <Link to={'/react-questions'} style={darkMode ? {backgroundColor: '#3B4D66', color: '#fff'} : {}}>
                    <img src="./img/react-icon.png" alt="" />
                    <h3>React JS</h3>
                </Link>

            </div>

        </>
    )
}