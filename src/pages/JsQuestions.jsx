import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import { useNavigate } from "react-router-dom";

export default function JsQuestions() {

    const {darkMode, setDarkMode, category, setCategory, trueCount, setTrueCount} = useContext(DataContext);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [trueA, setTrueA] = useState(null);
    const [trueB, setTrueB] = useState(null);
    const [trueC, setTrueC] = useState(null);
    const [trueD, setTrueD] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const navigate = useNavigate();

    const jsQuestions = [
        {
            question: 'Javascript hangi kod blokları arasına yazılır?',
            choiseA: '<javascript>',
            choiseB: '<scripting>',
            choiseC: '<script>',
            choiseD: '<js>',
            answer: '<script>'
        },
    
        {
            question: 'Hangisi değişken tanımlama için kullanılmaz?',
            choiseA: 'var',
            choiseB: 'const',
            choiseC: 'let',
            choiseD: 'num',
            answer: 'num'
        },
    
        {
            question: 'Uyarı kutusuna yazı yazmak için hangisi kullanılır?',
            choiseA: 'msg',
            choiseB: 'alert',
            choiseC: 'alertBox',
            choiseD: 'msgBox',
            answer: 'alert'
        },
    
        {
            question: 'Butona tıkladığında hangi olay tetiklenir?',
            choiseA: 'onchange',
            choiseB: 'onclick',
            choiseC: 'onblur',
            choiseD: 'onmouseover',
            answer: 'onclick'
        },
    
        {
            question: 'Hangisi bir JavaScript veri tipi değildir?',
            choiseA: 'Number',
            choiseB: 'String',
            choiseC: 'Boolean',
            choiseD: 'Float',
            answer: 'Float'
        },
    
        {
            question: 'Hangi operatörde değerlerin tipi dikkate alınmaz?',
            choiseA: '===',
            choiseB: '==',
            choiseC: '!=',
            choiseD: '!==',
            answer: '=='
        },
    
        {
            question: 'Bir dizi elemanının değerini nasıl alırsınız?',
            choiseA: 'get()',
            choiseB: 'retrieve()',
            choiseC: 'index()',
            choiseD: '[]',
            answer: '[]'
        },
    
        {
            question: "Hangisi JavaScript'in döngü yapısı değildir?",
            choiseA: 'for',
            choiseB: 'while',
            choiseC: 'foreach',
            choiseD: 'do...while',
            answer: 'foreach'
        },
    
        {
            question: "Javascript'te bir fonksiyon nasıl tanımlanır?",
            choiseA: 'function myFunction() {}',
            choiseB: 'myFunction() = function() {}',
            choiseC: 'myFunction() => {}',
            choiseD: 'func myFunction() {}',
            answer: 'function myFunction() {}'
        },
    
        {
            question: 'Hangi yöntem bir dizinin sonuna eleman ekler?',
            choiseA: 'append()',
            choiseB: 'push()',
            choiseC: 'addToEnd()',
            choiseD: 'insert()',
            answer: 'push()'
        }
    ];

    useEffect(() => {
        setCategory('Javascript')
    }, [])

    useEffect(() => {
        if(questionNumber + 1 > jsQuestions.length){
            navigate('/results')
        } else {
            if (isSelected === true) {
                const timer = setTimeout(() => {
                    nextQuestion();
                    setIsSelected(false);
                }, 2000);
          return () => clearTimeout(timer);
        }
        }
      }, [isSelected]);
    
      function nextQuestion() {
        setQuestionNumber(questionNumber + 1);
        setTrueA(null);
        setTrueB(null);
        setTrueC(null);
        setTrueD(null);
        setIsSelected(false);
      }

    function handleSelectA(e) {
        setIsSelected(true);
        if(jsQuestions[questionNumber].choiseA === jsQuestions[questionNumber].answer) {
            setTrueA(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueA(false);
        }
    }

    function handleSelectB(e) {
        setIsSelected(true);
        if(jsQuestions[questionNumber].choiseB === jsQuestions[questionNumber].answer) {
            setTrueB(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueB(false);
        }
    }

    function handleSelectC(e) {
        setIsSelected(true);
        if(jsQuestions[questionNumber].choiseC === jsQuestions[questionNumber].answer) {
            setTrueC(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueC(false);
        }
    }

    function handleSelectD(e) {
        setIsSelected(true);
        if(jsQuestions[questionNumber].choiseD === jsQuestions[questionNumber].answer) {
            setTrueD(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueD(false);
        }
    }

    return (
        <>
        
        <div className="main-left" style={darkMode ? {color: '#fff'}: {}}>

            <p>{jsQuestions.length} sorudan {questionNumber + 1}. soru</p>

            <h5>{jsQuestions[questionNumber]?.question}</h5>

            </div>

            <div className="main-right">
            <button onClick={handleSelectA} value={jsQuestions[questionNumber]?.choiseA} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueA === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueA === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>A</div>
                <h3>{jsQuestions[questionNumber]?.choiseA}</h3>
            </button>

            <button onClick={handleSelectB} value={jsQuestions[questionNumber]?.choiseB} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueB === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueB === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>B</div>
                <h3>{jsQuestions[questionNumber]?.choiseB}</h3>
            </button>

            <button onClick={handleSelectC} value={jsQuestions[questionNumber]?.choiseC} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueC === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueC === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>C</div>
                <h3>{jsQuestions[questionNumber]?.choiseC}</h3>
            </button>

            <button onClick={handleSelectD} value={jsQuestions[questionNumber]?.choiseD} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueD === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueD === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>D</div>
                <h3>{jsQuestions[questionNumber]?.choiseD}</h3>
            </button>
            </div>

        
        </>
    )
}