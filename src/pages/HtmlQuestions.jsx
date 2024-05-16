import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import { useNavigate } from "react-router-dom";

export default function HtmlQuestions() {

    const {darkMode, setDarkMode, category, setCategory, trueCount, setTrueCount} = useContext(DataContext);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [trueA, setTrueA] = useState(null);
    const [trueB, setTrueB] = useState(null);
    const [trueC, setTrueC] = useState(null);
    const [trueD, setTrueD] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const navigate = useNavigate();

    const htmlQuestions = [
        {
            question: 'HTML ne anlama gelir?',
            choiseA: 'Hyper Text Markup Language',
            choiseB: 'High Text Markup Language',
            choiseC: 'Hyperlinks and Text Markup Language',
            choiseD: 'Home Tool Markup Language',
            answer: 'Hyper Text Markup Language'
        },
    
        {
            question: 'HTML ile hangi tür içerikler oluşturulur?',
            choiseA: 'Statik',
            choiseB: 'Dinamik',
            choiseC: 'Yarı Statik',
            choiseD: 'Hareketli',
            answer: 'Statik'
        },
    
        {
            question: 'HTML sayfasında bir resim eklemek için hangi etiket kullanılır?',
            choiseA: '<image>',
            choiseB: '<img>',
            choiseC: '<picture>',
            choiseD: '<src>',
            answer: '<img>'
        },
    
        {
            question: 'HTML sayfasında bağlantı eklemek için hangi etiket kullanılır?',
            choiseA: '<a>',
            choiseB: '<link>',
            choiseC: '<href>',
            choiseD: '<url>',
            answer: '<a>'
        },
    
        {
            question: 'HTML sayfasında bir liste oluşturmak için hangi etiket kullanılır?',
            choiseA: '<list>',
            choiseB: '<ul>',
            choiseC: '<ol>',
            choiseD: '<li>',
            answer: '<ul>'
        },
    
        {
            question: 'HTML sayfasında başlık belirtmek için hangi etiket kullanılır?',
            choiseA: '<title>',
            choiseB: '<h1>',
            choiseC: '<head>',
            choiseD: '<header>',
            answer: '<h1>'
        },
    
        {
            question: 'HTML sayfasında bir tablo oluşturmak için hangi etiket kullanılır?',
            choiseA: '<table>',
            choiseB: '<tr>',
            choiseC: '<td>',
            choiseD: '<th>',
            answer: '<table>'
        },
    
        {
            question: 'HTML sayfasında bir form oluşturmak için hangi etiket kullanılır?',
            choiseA: '<form>',
            choiseB: '<input>',
            choiseC: '<submit>',
            choiseD: '<button>',
            answer: '<form>'
        },
    
        {
            question: 'HTML sayfasında bir video eklemek için hangi etiket kullanılır?',
            choiseA: '<video>',
            choiseB: '<media>',
            choiseC: '<play>',
            choiseD: '<source>',
            answer: '<video>'
        },
    
        {
            question: 'HTML sayfasında bir meta bilgisi belirtmek için hangi etiket kullanılır?',
            choiseA: '<meta>',
            choiseB: '<head>',
            choiseC: '<link>',
            choiseD: '<title>',
            answer: '<meta>'
        }
    ];

    useEffect(() => {
        setCategory('HTML')
    }, [])

    useEffect(() => {
        if(questionNumber + 1 > htmlQuestions.length){
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
        if(htmlQuestions[questionNumber].choiseA === htmlQuestions[questionNumber].answer) {
            setTrueA(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueA(false);
        }
    }

    function handleSelectB(e) {
        setIsSelected(true);
        if(htmlQuestions[questionNumber].choiseB === htmlQuestions[questionNumber].answer) {
            setTrueB(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueB(false);
        }
    }

    function handleSelectC(e) {
        setIsSelected(true);
        if(htmlQuestions[questionNumber].choiseC === htmlQuestions[questionNumber].answer) {
            setTrueC(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueC(false);
        }
    }

    function handleSelectD(e) {
        setIsSelected(true);
        if(htmlQuestions[questionNumber].choiseD === htmlQuestions[questionNumber].answer) {
            setTrueD(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueD(false);
        }
    }

    return (
        <>
        
        <div className="main-left" style={darkMode ? {color: '#fff'}: {}}>

            <p>{htmlQuestions.length} sorudan {questionNumber + 1}. soru</p>

            <h5>{htmlQuestions[questionNumber]?.question}</h5>

            </div>

            <div className="main-right">
            <button onClick={handleSelectA} value={htmlQuestions[questionNumber]?.choiseA} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueA === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueA === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>A</div>
                <h3>{htmlQuestions[questionNumber]?.choiseA}</h3>
            </button>

            <button onClick={handleSelectB} value={htmlQuestions[questionNumber]?.choiseB} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueB === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueB === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>B</div>
                <h3>{htmlQuestions[questionNumber]?.choiseB}</h3>
            </button>

            <button onClick={handleSelectC} value={htmlQuestions[questionNumber]?.choiseC} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueC === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueC === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>C</div>
                <h3>{htmlQuestions[questionNumber]?.choiseC}</h3>
            </button>

            <button onClick={handleSelectD} value={htmlQuestions[questionNumber]?.choiseD} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueD === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueD === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>D</div>
                <h3>{htmlQuestions[questionNumber]?.choiseD}</h3>
            </button>
            </div>

        
        </>
    )
}