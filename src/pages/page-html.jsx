import { useState } from "react"

export default function PageHTML() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isThatTrue, setIsThatTrue ] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState('')

    let soruHTML = [
        {
            soru: 'Hangi HTML etiketi metni kalın yapar?',
            secenekA: 'i',
            secenekB: 'br',
            secenekC: 'strong',
            secenekD: 'span',
            dogru: 'strong'
        },
    
        {
            soru: 'HTML sayfalarında bir resim eklemek için hangi etiket kullanılır?',
            secenekA: 'img',
            secenekB: 'picture',
            secenekC: 'image',
            secenekD: 'photo',
            dogru: 'img'
        },
    
        {
            soru: "HTML'de bir bağlantıyı yeni pencerede açmak için kullanılan özellik nedir?",
            secenekA: 'target="_blank"',
            secenekB: 'window="new"',
            secenekC: 'open="new"',
            secenekD: 'link="blank"',
            dogru: 'target="_blank"'
        },
    
        {
            soru: "HTML'de ul etiketi ne işe yarar?",
            secenekA: 'Sıralı liste başlatmak için kullanılır.',
            secenekB: 'Sırasız liste başlatmak için kullanılır.',
            secenekC: 'Tanımlı liste başlatmak için kullanılır.',
            secenekD: 'Hiçbiri',
            dogru: 'Sırasız liste başlatmak için kullanılır.'
        },
    
        {
            soru: "Bir web sayfası için yazılan genel css kodları hangi etiketle başlar?",
            secenekA: '<link>',
            secenekB: '<script>',
            secenekC: '<head>',
            secenekD: '<style>',
            dogru: '<style>'
        },
    ]

    function selected(e) {
        e.target.style.border = '3px solid #A729F5'
        setSelectedAnswer(e.currentTarget.querySelector('h1').innerText)
        console.log(selectedAnswer)
    }
    
    function checkAnswer() {
        selectedAnswer === soruHTML[currentIndex].dogru ? nextQuestion() : alert('GAME OVER')
        setTimeout(() => {
            let btns = document.querySelectorAll('.choises button')
            for(let btn of btns) {
                btn.style.border = 'none'
            }
        }, 0)
        
        
    }

    function nextQuestion() {
        console.log(currentIndex)
        currentIndex + 2 > soruHTML.length ? alert('tebrikler çok iyiydin') : setCurrentIndex(currentIndex + 1);

        


    }

    return (
        <div className="subject-container">

            <div className="subject-container-header">

                <img src="./src/assets/img/html-icon.png" alt="" />
                HTML

            </div>

            <div className="questionBox">

                <div className="question">
                    <p>Questions {currentIndex + 1} of {soruHTML.length}</p>

                    {soruHTML[currentIndex].soru}
                </div>

                <div className="choises">

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }}>A</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruHTML[currentIndex].secenekA}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >B</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruHTML[currentIndex].secenekB}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >C</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruHTML[currentIndex].secenekC}</h1>
                    </button>

                    <button onClick={selected}>
                        <p style={{ pointerEvents: 'none' }} >D</p>
                        <h1 style={{ pointerEvents: 'none' }}>{soruHTML[currentIndex].secenekD}</h1>
                    </button>
                    
                    <button onClick={checkAnswer} id="submitAnswer">Submit Answer</button>
                </div>
            </div>

        </div>
    )
}