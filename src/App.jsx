import { Link } from "react-router-dom"

export default function App() {



    return (

        <div className="container">
            <div className="box">

                <div className="welcome">
                    <h1>Welcome to the <span>Frontend Quiz!</span></h1>
                    <p>Pick a subject to get started.</p>
                </div>

                <div className="subjects">
                    
                    <Link to='./questions-html'><img src="./src/assets/img/html-icon.png" alt="" /> HTML</Link>
                    <Link to='./questions-css'><img src="./src/assets/img/css-icon.png" alt="" /> CSS</Link>
                    <Link to='./questions-js'><img src="./src/assets/img/js-icon.png" alt="" /> Javascript</Link>
                    <Link to='./questions-accessibility'><img src="./src/assets/img/acc-icon.png" alt="" /> Accessibility</Link>

                </div>


            </div>
        </div>
    )
}