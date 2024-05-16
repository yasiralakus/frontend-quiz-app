import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import { useNavigate } from "react-router-dom";

export default function CssQuestions() {

    const {darkMode, setDarkMode, category, setCategory, trueCount, setTrueCount} = useContext(DataContext);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [trueA, setTrueA] = useState(null);
    const [trueB, setTrueB] = useState(null);
    const [trueC, setTrueC] = useState(null);
    const [trueD, setTrueD] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const navigate = useNavigate();

    const cssQuestions = [
        {
            question: 'CSS ile hangi özellikler kontrol edilir?',
            choiseA: 'Sayfa Yapısı',
            choiseB: 'Sunum',
            choiseC: 'Veri Gönderimi',
            choiseD: 'Yazılım Hataları',
            answer: 'Sunum'
        },
    
        {
            question: 'Bir HTML elementine CSS uygulamak için hangi özellik kullanılır?',
            choiseA: 'style',
            choiseB: 'css',
            choiseC: 'class',
            choiseD: 'design',
            answer: 'class'
        },
    
        {
            question: 'Hangisi CSS’in önceden tanımlanmış (built-in) bir renk adı değildir?',
            choiseA: 'red',
            choiseB: 'blue',
            choiseC: 'cyan',
            choiseD: 'magenta',
            answer: 'magenta'
        },
    
        {
            question: 'CSS ile bir elementin boyutunu belirtmek için hangi özellik kullanılır?',
            choiseA: 'size',
            choiseB: 'height-width',
            choiseC: 'dimension',
            choiseD: 'height-width',
            answer: 'height-width'
        },
    
        {
            question: 'CSS ile metin rengini belirtmek için hangi özellik kullanılır?',
            choiseA: 'color',
            choiseB: 'text-color',
            choiseC: 'font-color',
            choiseD: 'text-style',
            answer: 'color'
        },
    
        {
            question: 'Hangisi CSS özelliklerinin sıralamasını belirleyen terimdir?',
            choiseA: 'Order',
            choiseB: 'Z-index',
            choiseC: 'Layer',
            choiseD: 'Priority',
            answer: 'Z-index'
        },
    
        {
            question: 'Bir elementin kenarlık (border) rengini belirtmek için hangi CSS özelliği kullanılır?',
            choiseA: 'border-style',
            choiseB: 'border-color',
            choiseC: 'border-line',
            choiseD: 'border-fill',
            answer: 'border-color'
        },
    
        {
            question: 'Hangisi bir CSS önem sırası terimidir?',
            choiseA: 'important',
            choiseB: 'critical',
            choiseC: 'necessary',
            choiseD: 'vital',
            answer: 'important'
        },
    
        {
            question: 'Bir HTML elementine birden fazla CSS sınıfı eklemek için hangi özelliği kullanırsınız?',
            choiseA: 'multiple',
            choiseB: 'concatenate',
            choiseC: 'join',
            choiseD: 'class',
            answer: 'class'
        },
    
        {
            question: 'CSS ile bir elementin arkaplan rengini belirtmek için hangi özellik kullanılır?',
            choiseA: 'background-color',
            choiseB: 'color',
            choiseC: 'foreground-color',
            choiseD: 'background-style',
            answer: 'background-color'
        }
    ];

    useEffect(() => {
        setCategory('CSS')
    }, [])

    useEffect(() => {
        if(questionNumber + 1 > cssQuestions.length){
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
        if(cssQuestions[questionNumber].choiseA === cssQuestions[questionNumber].answer) {
            setTrueA(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueA(false);
        }
    }

    function handleSelectB(e) {
        setIsSelected(true);
        if(cssQuestions[questionNumber].choiseB === cssQuestions[questionNumber].answer) {
            setTrueB(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueB(false);
        }
    }

    function handleSelectC(e) {
        setIsSelected(true);
        if(cssQuestions[questionNumber].choiseC === cssQuestions[questionNumber].answer) {
            setTrueC(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueC(false);
        }
    }

    function handleSelectD(e) {
        setIsSelected(true);
        if(cssQuestions[questionNumber].choiseD === cssQuestions[questionNumber].answer) {
            setTrueD(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueD(false);
        }
    }

    return (
        <>
        
        <div className="main-left" style={darkMode ? {color: '#fff'}: {}}>

            <p>{cssQuestions.length} sorudan {questionNumber + 1}. soru</p>

            <h5>{cssQuestions[questionNumber]?.question}</h5>

            </div>

            <div className="main-right">
            <button onClick={handleSelectA} value={cssQuestions[questionNumber]?.choiseA} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueA === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueA === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>A</div>
                <h3>{cssQuestions[questionNumber]?.choiseA}</h3>
            </button>

            <button onClick={handleSelectB} value={cssQuestions[questionNumber]?.choiseB} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueB === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueB === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>B</div>
                <h3>{cssQuestions[questionNumber]?.choiseB}</h3>
            </button>

            <button onClick={handleSelectC} value={cssQuestions[questionNumber]?.choiseC} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueC === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueC === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>C</div>
                <h3>{cssQuestions[questionNumber]?.choiseC}</h3>
            </button>

            <button onClick={handleSelectD} value={cssQuestions[questionNumber]?.choiseD} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueD === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueD === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>D</div>
                <h3>{cssQuestions[questionNumber]?.choiseD}</h3>
            </button>
            </div>

        
        </>
    )
}