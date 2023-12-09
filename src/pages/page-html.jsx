import { useState } from "react"

export default function PageHTML() {

    const [currentIndex, setCurrentIndex] = useState(0);


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
            dogru: 'target="_blank""'
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
                    <button><p>A</p>{soruHTML[currentIndex].secenekA}</button>
                    <button><p>B</p>{soruHTML[currentIndex].secenekB}</button>
                    <button><p>C</p>{soruHTML[currentIndex].secenekC}</button>
                    <button><p>D</p>{soruHTML[currentIndex].secenekD}</button>
                    <button id="submitAnswer">Submit Answer</button>
                </div>
            </div>

        </div>
    )
}