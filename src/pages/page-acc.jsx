import { useState } from "react"
import { Link } from "react-router-dom"

let dogruSayisi = 0;
let yanlisSayisi = 0;

function QuestionsACC( {onQuizFinish}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isThatTrue, setIsThatTrue ] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    
    
    let soruACC = [
        {
            soru: "Web sayfalarında metin içeriğine alternatif sağlamak için hangi HTML etiketi kullanılır?",
            secenekA: '<alt>',
            secenekB: '<caption>',
            secenekC: '<label>',
            secenekD: '<img>',
            dogru: '<img>'
        },
    
        {
            soru: "Web sayfalarında gezinme amacıyla kullanılan bir bağlantının yanında neler olmalıdır?",
            secenekA: 'Role="link"',
            secenekB: 'title etiketi',
            secenekC: 'Hareketli gif',
            secenekD: 'Açıklama metni (alt etiketi)',
            dogru: 'Açıklama metni (alt etiketi)'
        },
    
        {
            soru: "Hangi özellik, sayfadaki ana başlığı ve belirli bir içeriği belirleyen bir etiketin rolünü tanımlar?",
            secenekA: 'aria-hidden',
            secenekB: 'role="heading"',
            secenekC: 'alt',
            secenekD: 'tabindex',
            dogru: 'role="heading"'
        },
    
        {
            soru: "Ekran okuyucular için görünmez bir resmi tanımlamak için kullanılan HTML özelliği nedir?",
            secenekA: 'aria-label',
            secenekB: 'role="hidden"',
            secenekC: 'hidden',
            secenekD: 'alt',
            dogru: 'aria-label'
        },
    
        {
            soru: "Hangi HTML etiketi, bir tablonun başlığını belirtmek için kullanılır?",
            secenekA: '<caption>',
            secenekB: '<thead>',
            secenekC: '<th>',
            secenekD: '<summary>',
            dogru: '<caption>'
        }
    ]
      
    function selected(e) {

        if(e.target.querySelector('h1').innerText === soruACC[currentIndex].dogru) {
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
        if(currentIndex + 2 > soruACC.length) {
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

                <img src="./src/assets/img/acc-icon.png" alt="" />
                Accessibility

            </div>

            <div className="questionBox">

                <div className="question">
                    <p>Questions {currentIndex + 1} of {soruACC.length}</p>

                    {soruACC[currentIndex].soru}
                </div>

                <div className="choises">

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }}>A</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruACC[currentIndex].secenekA}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >B</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruACC[currentIndex].secenekB}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >C</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruACC[currentIndex].secenekC}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >D</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruACC[currentIndex].secenekD}</h1>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

function ResultsACC() {

    function cleanScore() {
        dogruSayisi = 0;
        yanlisSayisi = 0;
    }

    return (

        <>
            <div className="subject-container-header">

                <img src="./src/assets/img/acc-icon.png" alt="" />
                Accessibility

            </div>

            <div className="questionBox">

                <div className="question">
                    <h3>Quiz Completed <span>Your scored...</span></h3>
                </div>

                <div className="rightSide">

                    <div className="scoreBox">

                        <div className="scoreBoxHeader">
                            <img src="./src/assets/img/acc-icon.png" alt="" /> Accessibility
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


export default function PageACC() {

    const [isFinished, setIsFinished] = useState(false);

    const handleQuizFinish = () => {
        setIsFinished(true);
    };

    return (

        <div className="subject-container">

            {isFinished === true ? <ResultsACC /> : <QuestionsACC onQuizFinish={handleQuizFinish} />}

        </div>
        )
}