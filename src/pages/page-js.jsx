import { useState } from "react"
import { Link } from "react-router-dom"

let dogruSayisi = 0;
let yanlisSayisi = 0;

function QuestionsJS( {onQuizFinish}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isThatTrue, setIsThatTrue ] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    
    
    let soruJS = [
        {
            soru: "JavaScript'te bir değişkeni tanımlamak için hangisi kullanılmaz?",
            secenekA: 'var',
            secenekB: 'let',
            secenekC: 'const',
            secenekD: 'console',
            dogru: 'console'
        },
    
        {
            soru: "JavaScript'te bir dizeyi ters çevirmek için kullanılan metot hangisidir?",
            secenekA: 'reverseString( )',
            secenekB: 'flip( )',
            secenekC: 'toUpperCase( )',
            secenekD: 'split( )',
            dogru: 'reverseString( )'
        },
    
        {
            soru: "JavaScript'te bir fonksiyonu belirli bir süre sonra bir kez çalıştırmak için hangi fonksiyon kullanılır?",
            secenekA: 'setTimeout',
            secenekB: 'setInterval',
            secenekC: 'executeAfter',
            secenekD: 'runAfter',
            dogru: 'setTimeout'
        },
    
        {
            soru: "JavaScript'te bir nesnenin belirli bir özelliğini kontrol etmek için kullanılan sözdizimi nedir?",
            secenekA: 'obj.property',
            secenekB: 'obj.method( )',
            secenekC: 'obj.attribute',
            secenekD: 'obj.check( )',
            dogru: 'obj.property'
        },
    
        {
            soru: "JavaScript'te bir diziyi filtrelemek için kullanılan fonksiyon hangisidir?",
            secenekA: 'map( )',
            secenekB: 'reduce( )',
            secenekC: 'filter( )',
            secenekD: 'sort( )',
            dogru: 'filter( )'
        }
    ]
      
    function selected(e) {

        if(e.target.querySelector('h1').innerText === soruJS[currentIndex].dogru) {
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
        if(currentIndex + 2 > soruJS.length) {
            setIsFinished(true);
            onQuizFinish();
            return;
        }
        
        setCurrentIndex( currentIndex + 1)
        console.log('current' + currentIndex)
        
    }


    return (
        <div className="subject-container">

            <div className="subject-container-header">

                <img src="./src/assets/img/js-icon.png" alt="" />
                Javascript

            </div>

            <div className="questionBox">

                <div className="question">
                    <p>Questions {currentIndex + 1} of {soruJS.length}</p>

                    {soruJS[currentIndex].soru}
                </div>

                <div className="choises">

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }}>A</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruJS[currentIndex].secenekA}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >B</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruJS[currentIndex].secenekB}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >C</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruJS[currentIndex].secenekC}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >D</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruJS[currentIndex].secenekD}</h1>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

function ResultsJS() {

    function cleanScore() {
        dogruSayisi = 0;
        yanlisSayisi = 0;
    }

    return (

        <>
            <div className="subject-container-header">

                <img src="./src/assets/img/js-icon.png" alt="" />
                Javascript

            </div>

            <div className="questionBox">

                <div className="question">
                    <h3>Quiz Completed <span>Your scored...</span></h3>
                </div>

                <div className="rightSide">

                    <div className="scoreBox">

                        <div className="scoreBoxHeader">
                            <img src="./src/assets/img/js-icon.png" alt="" /> Javascript
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


export default function PageJS() {

    const [isFinished, setIsFinished] = useState(false);

    const handleQuizFinish = () => {
        setIsFinished(true);
    };

    return (

        <div className="subject-container">

            {isFinished === true ? <ResultsJS /> : <QuestionsJS onQuizFinish={handleQuizFinish} />}

        </div>
        )
}