import { createContext, useState } from "react"
import { Outlet } from "react-router-dom";

export const DataContext = createContext(null);

export default function App() {

    const [darkMode, setDarkMode] = useState(false);
    const [category, setCategory] = useState(null);
    const [trueCount, setTrueCount] = useState(0);
    
    function handleChange(e) {
        if(e.target.checked) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }

    return(
        <div className="full-page" style={darkMode ? {backgroundColor: '#313E51'} : {}}>

            <header className="header">

                <div className="container">

                    <div>
                        {category !== null && <img src={`./img/${category === 'HTML' && 'html-icon.png' || category === 'CSS' && 'css-icon.png' || category === 'Javascript' && 'js-icon.png' || category === 'React JS' && 'react-icon.png' }`} alt="" />}
                        <h3 style={darkMode ? {color: '#fff'} : {}}>{category}</h3>
                    </div>

                    <form>
                        <img src={darkMode ? "./img/sunny-white.png" : "./img/sunny-gray.png"} alt="" />
                        <div>
                            <input onChange={handleChange} type="checkbox" name="" />
                            <div className="button-value"></div>
                        </div>
                        <img src={darkMode ? "./img/moon-white.png" : "./img/moon-gray.png"} alt="" />
                    </form>

                </div>

            </header>


            <main className="main">
                <div className="container">
                    <DataContext.Provider value={{darkMode, setDarkMode, category, setCategory, trueCount, setTrueCount}}>
                        <Outlet>
                        </Outlet>
                    </DataContext.Provider>
                </div>
            </main>


        </div>
    )

}