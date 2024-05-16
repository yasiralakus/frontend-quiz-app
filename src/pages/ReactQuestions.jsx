import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import { useNavigate } from "react-router-dom";

export default function ReactQuestions() {

    const {darkMode, setDarkMode, category, setCategory, trueCount, setTrueCount} = useContext(DataContext);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [trueA, setTrueA] = useState(null);
    const [trueB, setTrueB] = useState(null);
    const [trueC, setTrueC] = useState(null);
    const [trueD, setTrueD] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const navigate = useNavigate();

    const reactQuestions = [
        {
            question: 'React hangi şirket tarafından geliştirilmiştir?',
            choiseA: 'Google',
            choiseB: 'Facebook',
            choiseC: 'Amazon',
            choiseD: 'Microsoft',
            answer: 'Facebook'
        },
    
        {
            question: 'React hangi programlama diliyle yazılmıştır?',
            choiseA: 'JavaScript',
            choiseB: 'Python',
            choiseC: 'Java',
            choiseD: 'C#',
            answer: 'JavaScript'
        },
    
        {
            question: 'React bileşenleri oluşturmak için hangi fonksiyonu kullanır?',
            choiseA: 'createComponent',
            choiseB: 'createElement',
            choiseC: 'makeComponent',
            choiseD: 'newComponent',
            answer: 'createElement'
        },
    
        {
            question: "React'te state yönetmek için hangi fonksiyon kullanılır?",
            choiseA: 'setState',
            choiseB: 'updateState',
            choiseC: 'modifyState',
            choiseD: 'changeState',
            answer: 'setState'
        },
    
        {
            question: "React'te bir bileşenin render edilmesi için hangi fonksiyon kullanılır?",
            choiseA: 'display',
            choiseB: 'render',
            choiseC: 'show',
            choiseD: 'draw',
            answer: 'render'
        },
    
        {
            question: "React'te JSX nedir?",
            choiseA: 'JavaScript XML',
            choiseB: 'JavaScript Extension',
            choiseC: 'JavaScript Syntax',
            choiseD: 'JavaScript eXtension',
            answer: 'JavaScript XML'
        },
    
        {
            question: "React'te bir bileşenin prop'unu değiştirmek için hangi fonksiyon kullanılır?",
            choiseA: 'setProp',
            choiseB: 'updateProp',
            choiseC: 'changeProp',
            choiseD: 'passProp',
            answer: 'changeProp'
        },
    
        {
            question: "React'te bir bileşenin yaşam döngüsünde hangi fonksiyon kullanılır?",
            choiseA: 'constructor',
            choiseB: 'init',
            choiseC: 'lifecycle',
            choiseD: 'componentDidMount',
            answer: 'componentDidMount'
        },
    
        {
            question: "React'te hangi yöntem bir bileşenin state'ini günceller?",
            choiseA: 'updateState',
            choiseB: 'setState',
            choiseC: 'modifyState',
            choiseD: 'changeState',
            answer: 'setState'
        },
    
        {
            question: "React'te bir bileşenin state'ini başlangıçta tanımlamak için hangi fonksiyon kullanılır?",
            choiseA: 'getDefaultState',
            choiseB: 'initializeState',
            choiseC: 'setInitialState',
            choiseD: 'constructor',
            answer: 'constructor'
        }
    ];

    useEffect(() => {
        setCategory('React JS')
    }, [])

    useEffect(() => {
        if(questionNumber + 1 > reactQuestions.length){
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
        if(reactQuestions[questionNumber].choiseA === reactQuestions[questionNumber].answer) {
            setTrueA(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueA(false);
        }
    }

    function handleSelectB(e) {
        setIsSelected(true);
        if(reactQuestions[questionNumber].choiseB === reactQuestions[questionNumber].answer) {
            setTrueB(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueB(false);
        }
    }

    function handleSelectC(e) {
        setIsSelected(true);
        if(reactQuestions[questionNumber].choiseC === reactQuestions[questionNumber].answer) {
            setTrueC(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueC(false);
        }
    }

    function handleSelectD(e) {
        setIsSelected(true);
        if(reactQuestions[questionNumber].choiseD === reactQuestions[questionNumber].answer) {
            setTrueD(true);
            setTrueCount(trueCount + 1)
        } else {
            setTrueD(false);
        }
    }

    return (
        <>
        
        <div className="main-left" style={darkMode ? {color: '#fff'}: {}}>

            <p>{reactQuestions.length} sorudan {questionNumber + 1}. soru</p>

            <h5>{reactQuestions[questionNumber]?.question}</h5>

            </div>

            <div className="main-right">
            <button onClick={handleSelectA} value={reactQuestions[questionNumber]?.choiseA} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueA === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueA === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>A</div>
                <h3>{reactQuestions[questionNumber]?.choiseA}</h3>
            </button>

            <button onClick={handleSelectB} value={reactQuestions[questionNumber]?.choiseB} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueB === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueB === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>B</div>
                <h3>{reactQuestions[questionNumber]?.choiseB}</h3>
            </button>

            <button onClick={handleSelectC} value={reactQuestions[questionNumber]?.choiseC} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueC === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueC === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>C</div>
                <h3>{reactQuestions[questionNumber]?.choiseC}</h3>
            </button>

            <button onClick={handleSelectD} value={reactQuestions[questionNumber]?.choiseD} style={darkMode ? {backgroundColor: '#3B4D66', color:'#fff'} : {}}>
                <div style={
                    trueD === true ? {backgroundColor: '#26D782', color: '#fff'} :
                    trueD === false ? {backgroundColor: '#EE5454', color: '#fff'} :
                    {}
                }>D</div>
                <h3>{reactQuestions[questionNumber]?.choiseD}</h3>
            </button>
            </div>

        
        </>
    )
}