import { useState } from "react";

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

function QuestionsHTML() {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <>
        <div className="questionBox">
            {<h1>{soruHTML[currentIndex].soru}</h1>}
        </div>
        </>
    )
}

export default function App() {

    function htmlSecildi() {
        document.querySelector('.welcome').remove();
        document.querySelector('.choise').remove();

        <QuestionsHTML />

    }

    return (
        <div className="box">
            <div className="welcome">
                <h1>Welcome to the <span>Frontend Quiz!</span></h1>
                <p>Pick a subject to get started.</p>
            </div>

            <div className="choise">
                <button onClick={htmlSecildi}>
                    <img src="./src/assets/img/html-icon.png" alt="" />
                    HTML
                </button>

                <button>
                    <img src="./src/assets/img/css-icon.png" alt="" />
                    CSS
                </button>

                <button>
                    <img src="./src/assets/img/js-icon.png" alt="" />
                    Javascript
                </button>

                <button>
                    <img src="./src/assets/img/acc-icon.png" alt="" />
                    Accessibility
                </button>
            </div>
        </div>
    )
}