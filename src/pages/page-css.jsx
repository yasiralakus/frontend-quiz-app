import { useState } from "react"
import { Link } from "react-router-dom"

let dogruSayisi = 0;
let yanlisSayisi = 0;

function QuestionsCSS( {onQuizFinish}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isThatTrue, setIsThatTrue ] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    
    
    let soruCSS = [
        {
            soru: "CSS'de arkaplan rengi değiştirmek için hangisi kullanılır?",
            secenekA: 'color',
            secenekB: 'background-color',
            secenekC: 'border',
            secenekD: 'hiçbiri',
            dogru: 'background-color'
        },
    
        {
            soru: 'Yazı rengini değiştirmek için hangisi kullanılır?',
            secenekA: 'text-color',
            secenekB: 'font-color',
            secenekC: 'color',
            secenekD: 'textcolor',
            dogru: 'color'
        },
    
        {
            soru: "Hangisi yazının yalnızca ilk harfinin büyük olmasını sağlar?",
            secenekA: 'text-transform: uppercase',
            secenekB: 'text-transform: lowercase',
            secenekC: 'text-transform: capitalize',
            secenekD: 'text: capitalize',
            dogru: 'text-transform: capitalize'
        },
    
        {
            soru: "Üstten 10px, alttan 15px, soldan 5px ve sağdan 20px padding bırakma kodu hangisidir?",
            secenekA: 'padding: 10px 20px 15px 5px',
            secenekB: 'padding: 15px 20px 10px 5px',
            secenekC: 'padding: 10px 5px 20px 15px',
            secenekD: 'padding: 20px 10px 15px 5px',
            dogru: 'padding: 10px 20px 15px 5px'
        },
    
        {
            soru: "Hangisi yazıyı ortalamak için kullanılır?",
            secenekA: 'hiçbiri',
            secenekB: 'text: center',
            secenekC: 'text-align: middle',
            secenekD: 'text-align: center',
            dogru: 'text-align: center'
        },
    ]
      
    function selected(e) {

        if(e.target.querySelector('h1').innerText === soruCSS[currentIndex].dogru) {
            e.target.style.backgroundColor = '#26D782';
            dogruSayisi = dogruSayisi + 1
            console.log('dogru ' + dogruSayisi)
        } else {
            e.target.style.backgroundColor = '#EE5454'
            yanlisSayisi = yanlisSayisi + 1
            console.log('yanlis ' + yanlisSayisi)
        };
        setTimeout(() => {
            e.target.style.backgroundColor = '';
            nextQuestion();
        }, 1500)

    }

    function nextQuestion() {
        if(currentIndex + 2 > soruCSS.length) {
            setIsFinished(true);
            onQuizFinish();
            return;
        }
        
        setCurrentIndex( currentIndex + 1)
        console.log('current' + currentIndex)
        
    }


    return (
        <>

            <div className="subject-container-header">

                <img src="./src/assets/img/css-icon.png" alt="" />
                CSS

            </div>

            <div className="questionBox">

                <div className="question">
                    <p>Questions {currentIndex + 1} of {soruCSS.length}</p>

                    {soruCSS[currentIndex].soru}
                </div>

                <div className="choises">

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }}>A</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruCSS[currentIndex].secenekA}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >B</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruCSS[currentIndex].secenekB}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >C</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruCSS[currentIndex].secenekC}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >D</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruCSS[currentIndex].secenekD}</h1>
                    </button>
                    
                </div>
            </div>
        </>
    )
}

function ResultsCSS() {

    function cleanScore() {
        dogruSayisi = 0;
        yanlisSayisi = 0;
    }

    return (

        <>
            <div className="subject-container-header">

                <img src="./src/assets/img/css-icon.png" alt="" />
                CSS

            </div>

            <div className="questionBox">

                <div className="question">
                    <h3>Quiz Completed <span>Your scored...</span></h3>
                </div>

                <div className="rightSide">

                    <div className="scoreBox">

                        <div className="scoreBoxHeader">
                            <img src="./src/assets/img/css-icon.png" alt="" /> CSS
                        </div>

                        <div className="scoreBoxBody">

                            <h1>{dogruSayisi}</h1>
                            <p>out of {dogruSayisi + yanlisSayisi}</p>

                        </div>
                        
                    </div>

                    <Link to='/' onClick={cleanScore}>Play Again</Link>

                </div>
            </div>
        </>
        )
            
}


export default function PageCSS() {

    const [isFinished, setIsFinished] = useState(false);

    const handleQuizFinish = () => {
        setIsFinished(true);
    };

    return (

        <div className="subject-container">

            {isFinished === true ? <ResultsCSS /> : <QuestionsCSS onQuizFinish={handleQuizFinish} />}

        </div>
        )
}